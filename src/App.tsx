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
import "./App.css";
import { ResultsCard } from "./results";
import { useState } from "react";
import { API_dataType, dropdownitemsType } from "./data/dataTypes";
import { useMyFetch } from "./data/fetchData";

function App() {
  const [API_KEY, setAPI_KEY] = useState<string>("");
  const [registration_number, setRegistrationNumber] = useState<number>();

  const api_functions: dropdownitemsType = [
    {
      key: "fullinfo",
      label: "الاستعلام عن كافة بيانات السجل التجاري",
    },
    {
      key: "info",
      label: "الاستعلام عن البيانات الاساسية",
    },
    {
      key: "tree",
      label: "الاستعلام عن السجلات التجارية المرتبطة بالسجل",
    },
    {
      key: "owners",
      label: "الاستعلام عن الملاك والشركاء ونسبة حصصهم",
    },
  ];
  const [selected_function, setSelectedFunction] = useState<string>(api_functions[0].key);

  const known_companies: dropdownitemsType = [
    {
        key: "1010838913",
        label: "شركة تأميني لوساطة التأمين الالكتروني",
    },
    {
        key: "1010476663",
        label: "شركة رسن لتقنية المعلومات",
    },
    {
        key: "1010867990",
        label: "شركة تريزا المحدودة",
    }
  ];
  const [selected_company, setSelectedCompany] = useState<string>("");

  const res_JSON = useMyFetch(API_KEY, Number.parseInt(selected_company));
  const [resData, setData] = useState<API_dataType | undefined>();

  return (
    <div className="w-screen h-screen font-sans flex flex-col gap-4 items-center">
      <Card className="p-3 w-full flex flex-row gap-4 items-center justify-center">
        <Dropdown className="light text-foreground bg-background">
          <DropdownTrigger>
            <Button variant="bordered" startContent={<FaCaretDown />}>
              { api_functions.find(({ key }) => key === selected_function)?.label }
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" 
          items={api_functions} 
          disabledKeys={api_functions.map(item => item.key).slice(1)}
          onAction={(key) => setSelectedFunction(`${key}`)}>
            {(item) => (
              <DropdownItem key={item.key}>
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>

        <Input
          type="string"
          label="API مفتاح الـ"
          isRequired
          className="max-w-xs"
          value={API_KEY}
          onValueChange={value => setAPI_KEY(value)}
        />

        <Divider orientation="vertical" className="h-7 min-w-0.5" />
        <Dropdown className="light text-foreground bg-background">
          <DropdownTrigger>
            <Button
              className=""
              variant="bordered"
              startContent={<FaCaretDown />}
            >
              { known_companies.find(({ key }) => key === selected_company)?
              known_companies.find(({ key }) => key === selected_company)?.label: 'أو اختر شركة من القائمة'}
              </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" 
          items={known_companies} 
          onAction={(key) => {
            setSelectedCompany(`${key}`);
            setRegistrationNumber(Number.parseInt(`${key}`));
            }}>
            {(item) => (
              <DropdownItem key={item.key}>
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>

        <Input
          type="number"
          label="رقم السجل التجاري أو الرقم الوطني الموحد"
          isRequired
          className="max-w-xs"
          value={registration_number?.toString()}
          onValueChange={value => {
            let available = known_companies.find(({ key }) => key === value);
            (available != undefined)? setSelectedCompany(available.key) : setSelectedCompany("");            
            setRegistrationNumber(Number.parseInt(value));
          }}
        />

        <Button color='danger' isLoading={res_JSON.status == 'loading'} onPress={() => {
          if (API_KEY.length != 0 && selected_company.length != 0) {
            res_JSON.refetch().then((r) => {
              if (r.isSuccess) {
                // console.log(r.data);
                setData(r.data);
              } else {
                alert('failed to fetch');
              }
          })} else {alert('please type')}
          }} >بحث</Button>
      </Card>

      <ResultsCard resData={resData}/>
    </div>
  );
}

export default App;
