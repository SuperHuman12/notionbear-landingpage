import Image from 'next/image';

const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case 'heading':
        return <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">{item.text}</h3>;
      case 'paragraph':
        return <p key={index} className="text-base text-gray-700 my-2">{item.text}</p>;
      case 'image':
        return (
        <div key={index} className="flex justify-center">
          <Image width={1000} height={1000} src={item.url} alt={item.alt} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        );  case 'bold':
        return <strong key={index} className="font-semibold">{item.text}</strong>;
      case 'list':
        return (
          <ul key={index} className="list-disc pl-5 space-y-1">
            {item.items.map((listItem: string, listItemIndex: number) => (
              <li key={listItemIndex} className="text-gray-700">{listItem}</li>
            ))}
          </ul>
        );
      case 'link':
        return <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">{item.text}</a>;
      case 'blockquote':
        return <blockquote key={index} className="italic border-l-4 border-gray-200 pl-4 py-2 my-2">{item.text}</blockquote>;
      case 'code':
        return (
          <pre key={index} className="bg-gray-100 rounded-md p-3 overflow-auto">
            <code className="text-sm">{item.code}</code>
          </pre>
        );
      case 'video':
        return <video key={index}  width={1000} height={1000}   src={item.src} loop className="w-full h-auto max-w-full rounded-lg shadow-md"></video>;
      case 'iframe':
        return <iframe key={index} src={item.src} frameBorder="0" allowFullScreen className="w-full h-64 md:h-96 rounded-lg shadow-md"></iframe>;
      default:
        return null;
    }
  };

  export { renderContent}