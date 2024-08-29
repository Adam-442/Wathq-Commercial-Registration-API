import { Card, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export function PartyCard(props: {
  name: string;
  birthdate: string;
  relation: string;
  nationality: string;
}) {
  return (
    <Card className="">
      <p className="w-full text-center text-xl">{props.name}</p>
      <Table removeWrapper color="success">
        <TableHeader>
          <TableColumn className="text-center"> {"تاريخ الميلاد"} </TableColumn>
          <TableColumn className="text-center"> {"العلاقة"} </TableColumn>
          <TableColumn className="text-center"> {"الجنسية"} </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center"> {props.birthdate} </TableCell>
            <TableCell className="text-center"> {props.relation} </TableCell>
            <TableCell className="text-center"> {props.nationality} </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}