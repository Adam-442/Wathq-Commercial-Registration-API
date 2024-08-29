import {
  Card,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Skeleton,
} from "@nextui-org/react";
import { PartiesModal } from "./components/parties";
import { ActivitiesModal } from "./components/activities";
import { API_dataType } from "./data/dataTypes";

function MyTable(props: {
  label1: string;
  label2: string;
  value1: string;
  value2: string;
}) {

  return (
    <Table removeWrapper>
      <TableHeader>
        <TableColumn className="text-center"> {props.label2} </TableColumn>
        <TableColumn className="text-center"> {props.label1} </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center"> <Skeleton isLoaded={(props.value2 != "-")} className="rounded-full">{props.value2}</Skeleton> </TableCell>
          <TableCell className="text-center"> <Skeleton isLoaded={(props.value1 != "-")} className="rounded-full">{props.value1}</Skeleton> </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export function ResultsCard(props: {resData: API_dataType | undefined}) {
  return (
    <Badge
      content= {props.resData != undefined? props.resData.status.name : "حالة السجل التجاري"}
      color= {props.resData != undefined? "success" : "default"}
      placement="top-left"
      className="p-2 text-white"
    >
      <Card className="p-3 w-max h-max flex items-end gap-4">
        <p className="w-full text-center text-xl">{props.resData != undefined? props.resData.crName : "اسم السجل التجاري"}</p>

        <MyTable
          label1="رقم السجل التجاري"
          label2="الرقم الوطني الموحد"
          value1={props.resData != undefined? props.resData.crNumber : "-"}
          value2={props.resData?.crEntityNumber != undefined? props.resData.crEntityNumber : "-"}
        />
        <MyTable
          label1="تاريخ الاصدار بالهجري"
          label2="تاريخ الانتهاء بالهجري"
          value1={props.resData != undefined? props.resData.issueDate : "-"}
          value2={props.resData != undefined? props.resData.expiryDate : "-"}
        />
        <MyTable
          label1="نوع السجل"
          label2="مدينة السجل"
          value1={props.resData != undefined? props.resData.businessType.name : "-"}
          value2={props.resData != undefined? props.resData.address.general.address : "-"}
        />
        <MyTable
          label1="رأس المال"
          label2="عدد الأسهم"
          value1={props.resData?.capital?.paidAmount != undefined? `${props.resData.capital.paidAmount}` : "-"}
          value2={props.resData?.capital?.share?.sharePrice != undefined? `${props.resData.capital.share.sharePrice}` : "-"}
        />

        <div className="w-full flex gap-4 justify-center">
          <ActivitiesModal label="نشاطات السجل التجاري" activites={props.resData != undefined? props.resData.activities: undefined}/>
          <PartiesModal label="بيانات الملاك والشركاء وأعضاء مجلس الإدارة للسجل التجاري" parties={props.resData != undefined? props.resData.parties: undefined}/>
        </div>
      </Card>
    </Badge>
  );
}
