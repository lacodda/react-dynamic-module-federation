import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoadRemoteModule } from '@libs/utils';
import { Navbar, Button } from '@libs/ui';
import DynamicComponent from './DynamicComponent';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background: var(--gr-azure-pink);
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  h1 {
    font-size: var(--font-size-h1);
    width: max-content;
    text-transform: uppercase;
    background: var(--teal);
    background: var(--gr-teal-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const App: React.FC = () => {
  const [apps, setApps] = useState<string[]>([]);
  const [selected, setComponent] = useState<string>('');
  const [host, setHost] = useState<string>(process.env.APPS_URL ?? '');
  const [dynamicComponent, setDynamicComponent] = useState<any>(null);
  const loadRemoteModule = new LoadRemoteModule();

  function loadServers (): void {
    void (async () => {
      await loadRemoteModule.setHost(host).loadServers();
      setApps(loadRemoteModule.apps);
    })();
  }

  useEffect(() => {
    void (async () => {
      if (!selected) {
        setDynamicComponent(null);
        return;
      }

      setDynamicComponent((await loadRemoteModule.loadComponent(selected, './Module')).default);
    })();
  }, [selected]);

  return (
    <AppContainer>
      <Navbar>
        <input value={host} onInput={(event) => { setHost((event.target as HTMLTextAreaElement).value); }} />
        <Button onClick={() => { loadServers(); }}>Download</Button>
        <select value={selected} onChange={(event) => { setComponent(event.target.value); }}>
          <option value="">Please select one</option>
          {apps.map((app, k) => <option key={k} value={app}>{app}</option>)}
        </select>
      </Navbar>
      { dynamicComponent && <DynamicComponent is={dynamicComponent}/> }
      { !dynamicComponent &&
        <Container>
          <Title>
            <h1>Host</h1>
          </Title>
        </Container>
      }
    </AppContainer>
  );
};

export default App;
