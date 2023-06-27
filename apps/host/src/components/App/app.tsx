import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/navbar';
import DynamicComponent from '../DynamicComponent/dynamic-component';
import { LoadRemoteModule } from '../load-remote-module';
import './style.scss';

const App: React.FC = () => {
  const [apps, setApps] = useState<string[]>([]);
  const [selectedComponent, setComponent] = useState<string>('');
  const [host, setHost] = useState<string>(process.env.APPS_URL ?? '');
  const [comp, setComp] = useState<any>(null);

  const loadRemoteModule = new LoadRemoteModule();

  function loadServers (): void {
    void (async () => {
      await loadRemoteModule.setHost(host).loadServers();
      setApps(loadRemoteModule.apps);
    })();
  }

  useEffect(() => {
    void (async () => {
      if (!selectedComponent) {
        setComp(null);
        return;
      }

      setComp((await loadRemoteModule.loadComponent(selectedComponent, './Module')).default);
    })();
  }, [selectedComponent]);

  return (
    <div className="host">
      <Navbar apps={apps} host={host} selectedComponent={selectedComponent} setHost={setHost} loadServers={loadServers} setComponent={setComponent} />
      { comp && <DynamicComponent is={comp}/> }
      { !comp &&
      <div className="host__content">
        <div className="host__title">
          <h1>Host</h1>
        </div>
      </div>
      }
    </div>
  );
};

export default App;
