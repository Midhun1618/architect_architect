import React, { useState } from 'react';
import '../../About.css';

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child =>
        child.type.displayName === 'TabsList'
          ? React.cloneElement(child, { activeTab, setActiveTab })
          : child.type.displayName === 'TabsContent' && child.props.value === activeTab
            ? child
            : null
      )}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
  return (
    <div className={`tabs-list ${className}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}
TabsList.displayName = 'TabsList';

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  return (
    <button
      className={`tabs-trigger ${activeTab === value ? 'active' : ''}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = 'TabsTrigger';

export function TabsContent({ value, children }) {
  return <div className="tabs-content">{children}</div>;
}
TabsContent.displayName = 'TabsContent';
