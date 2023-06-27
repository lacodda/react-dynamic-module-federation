import React, { type DetailedHTMLProps, type HTMLAttributes, type Dispatch } from 'react';
import './style.scss';

export interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  apps: string[];
  host: string;
  selectedComponent: string;
  loadServers: Dispatch<void | Promise<void>>;
  setComponent: Dispatch<string>;
  setHost: Dispatch<string>;
}

export const Navbar = ({ apps, host, selectedComponent, loadServers, setComponent, setHost, ...props }: NavbarProps): JSX.Element => (
  <div className="navbar__container">
    <div className="navbar__menu">
      <input value={host} onInput={(event) => { setHost((event.target as HTMLTextAreaElement).value); }} />
      <button className="btn" onClick={() => { loadServers(); }}>Download</button>
      <select value={selectedComponent} onChange={(event) => { setComponent(event.target.value); }}>
        <option value="">Please select one</option>
        {apps.map((app, k) => <option key={k} value={app}>{app}</option>)}
      </select>
    </div>
  </div>);

export default Navbar;
