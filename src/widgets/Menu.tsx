interface MenuProps {
    title: string;
  }
  
  export function Menu({ title }: MenuProps) {
    return (
      <div className="group relative">
        {title}
        <div className="group-hover:block hidden absolute top-[30px] left-0 shadow-xl">
          <ul className="text-base font-normal">
            <li>2</li>
            <li>4</li>
            <li>5</li>
          </ul>

        </div>
      </div>
    );
  }