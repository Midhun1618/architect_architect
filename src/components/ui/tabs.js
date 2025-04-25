import React, { useState } from 'react';
import './tabs.css';

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {React.Children.map(children, (child) => {
          if (child.type === TabsList) {
            return React.cloneElement(child, { activeTab, onTabChange: handleTabChange });
          }
          return child;
        })}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child) => {
          if (child.type === TabsContent) {
            return React.cloneElement(child, { isActive: child.props.value === activeTab });
          }
          return child;
        })}
      </div>
    </div>
  );
}

export function TabsList({ children, activeTab, onTabChange }) {
  return (
    <div className="tabs-list-items">
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, {
            isActive: child.props.value === activeTab,
            onClick: () => onTabChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ children, isActive, onClick }) {
  return (
    <button
      className={`tabs-trigger ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, isActive }) {
  if (!isActive) return null;
  return <div className="tabs-content-item">{children}</div>;
}
