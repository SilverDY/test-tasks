// Напишите компонент инпут, который еще и рендерит текст.
// Сделате его controlled и uncontrolled одновременно в зависимости от пропсов
interface FirstTaskProps {}

export const FirstTask: React.FC<FirstTaskProps> = ({ ...props }) => {
  return <input {...props} />
}