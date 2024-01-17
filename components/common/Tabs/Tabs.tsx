import cls from './Tabs.module.scss';
import { useState } from "react";

type Props = {
  items: {
    name: string;
    value: string;
  }[];
  activeTab: string;
  onTabChange: (value: string) => void
}
export const Tabs = ({ items, onTabChange, activeTab }: Props) => {

  const changeTab = (value: string) => {
    console.log(value)
    onTabChange(value)
  }

  return (
    <div className={cls.tabs}>
      {
        items.map((tab, index) => {
          return (
            <div
              className={`${cls.tab} ${activeTab === tab.value ? cls.active: ''}`}
              key={tab.name}
              onClick={() => changeTab(tab.value)}>
              {tab.name}
            </div>
          )
        })
      }
    </div>
  )
}