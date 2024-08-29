// import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import { FaCaretDown } from "react-icons/fa";
// import { dropdownitemsType } from "../data/dataTypes";

// export function MyDropdown(props: {items: dropdownitemsType, selected_item: string}) {
//     return (
//         <Dropdown>
//           <DropdownTrigger>
//             <Button variant="bordered" startContent={<FaCaretDown />}>
//               { props.items.find(({ key }) => key === props.selected_item)?.label }
//             </Button>
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Dynamic Actions" 
//           items={props.items} 
//           disabledKeys={props.items.map(item => item.key).slice(1)}
//           onAction={(key) => setSelectedFunction(`${key}`)}>
//             {(item) => (
//               <DropdownItem key={item.key}>
//                 {item.label}
//               </DropdownItem>
//             )}
//           </DropdownMenu>
//         </Dropdown>
//     )
// }