import { FaCaretDown } from "react-icons/fa";
import {
  Button,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Card,
  Divider,
} from "@nextui-org/react";

export function SearchBar() {
    return (
        <Card className="p-3 w-full flex flex-row gap-4 items-center justify-center">
        <Dropdown isDisabled>
          <DropdownTrigger>
            <Button variant="bordered" startContent={<FaCaretDown />}>
              {" "}
              طلب جميع المعلومات{" "}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new"> طلب جميع المعلومات </DropdownItem>
            <DropdownItem key="copy"> طلب مختصر المعلومات </DropdownItem>
            <DropdownItem key="edit"> ... </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Input
          type="string"
          label="API مفتاح الـ"
          isRequired
          className="max-w-xs"
        />

        <Divider orientation="vertical" className="h-7 min-w-0.5" />
        <Dropdown>
          <DropdownTrigger>
            <Button
              className=""
              variant="bordered"
              startContent={<FaCaretDown />}
            >
              {" "}
              {" اختر شركة من القائمة "}{" "}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">جرير</DropdownItem>
            <DropdownItem key="copy">إيس</DropdownItem>
            <DropdownItem key="edit">التعاونية</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Input
          type="number"
          label="رقم السجل التجاري أو الرقم الوطني الموحد"
          isRequired
          className="max-w-xs"
        />

        <Button color="danger">بحث</Button>
      </Card>
    )
}