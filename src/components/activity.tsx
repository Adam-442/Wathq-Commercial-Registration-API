import { Card, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export function ActivityCard(props: {
  arabic: string;
  english: string;
}) {
  return (
    <Card className="">
      <Table removeWrapper color="success">
        <TableHeader>
          <TableColumn className="text-center"> {props.arabic} </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center"> {props.english} </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}