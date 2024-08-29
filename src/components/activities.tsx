import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { FaList } from "react-icons/fa";
import { ActivityCard } from "./activity";
import { activitiesType } from "../data/dataTypes";

export function ActivitiesModal(props: {label: string, activites: activitiesType | undefined}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // console.log(props.activites);

  return (
    <>
      <Button isDisabled={props.activites === undefined} onPress={onOpen} color="danger" variant="flat" startContent={<FaList />}>{props.label}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" className="light text-foreground bg-background">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.label}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  {props.activites?.isic != undefined? props.activites.isic?.map((activity) =>
                      <ActivityCard arabic={activity.name} english={activity.nameEn? activity.nameEn: "-"} />
                ): <ActivityCard arabic="لايوجد" english="Not Found" />}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
