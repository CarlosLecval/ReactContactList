import { useState } from "react";
import { Contact } from "./App";

interface Props {
  contact: Contact,
  total: number
}

export default function ContactItem({ contact, total }: Props) {
  const [active, setActive] = useState(false);
  return (
    <li className="bg-white rounded-md hover:bg-black/5">
      <div className="flex flex-wrap justify-between items-center p-5">
        <div>
          <h2 className="text-lg pb-3 font-bold">{contact.name}</h2>
          <button className="rounded bg-button-blue text-white text-sm" onClick={() => setActive(!active)}>
            <p className='py-1 px-2'>{active ? "Hide" : "Show"} details</p>
          </button>
        </div>
        <p className="text-sm">{contact.id}/{total}</p>
        {active &&
          <div className="flex flex-col gap-1">
            <p className="text-sm"><span className="font-bold">Email:</span>{contact.email}</p>
            <p className="text-sm"><span className="font-bold">Phone:</span> {contact.phone}</p>
            <p className="text-sm"><span className="font-bold">Address:</span>{contact.address}</p>
            <p className="text-sm"><span className="font-bold">Company:</span>{contact.company}</p>
          </div>
        }
      </div>
    </li>
  );
}
