/**
   Вам нужно создать универсальный компонент DynamicList, который отображает список элементов.
   Тип элементов списка должен быть динамически типизирован с использованием generics в TypeScript.
   Компонент должен принимать следующие пропсы:
   - items: массив элементов любого типа.
   - renderItem: функция, которая отвечает за рендеринг каждого элемента списка.
   Эта функция должна принимать элемент списка как аргумент и возвращать React элемент.

   DynamicList должен работать с элементами любого типа.
 */

import React from "react";

interface DynamicListProps {
  items: any;
  renderItem: any;
}

const DynamicList: React.FC<DynamicListProps> = ({ items, renderItem}) => {
  return <div>
    {
      // @ts-ignore
      items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))
    }
  </div>
}

const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
// const items = ['text', 'text'];
// const items = [1, 2];
// const items = [['text', 'text'], ['text', 'text']];

export const SecondTask: React.FC = () => {
  return <DynamicList
    items={items}
    renderItem={(item: any) => <div key={item.id}>{item.name}</div>}
  />
}
