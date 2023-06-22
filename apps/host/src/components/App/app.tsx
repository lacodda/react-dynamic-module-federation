import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/navbar';
import { LoadRemoteModule } from '../load-remote-module';

import './style.scss';

const App: React.FC = () => {
  const [apps, setApps] = useState<string[]>([]);
  const [selected, setComponent] = useState<any>(null);
  const [host, setHost] = useState<string>(process.env.APPS_URL ?? '');

  const loadRemoteModule = new LoadRemoteModule();

  async function loadServers (): Promise<void> {
    await loadRemoteModule.setHost(host).loadServers();
    setApps(loadRemoteModule.apps);
  }

  return (
    <div className="app">
      <Navbar apps={apps} host={host} setHost={setHost} selected={selected} loadServers={loadServers} setComponent={setComponent} />
      <div className="host__content">
        <div className="host__title">
          <h1>Host</h1>
        </div>
      </div>
    </div>
  );
};
export default App;
