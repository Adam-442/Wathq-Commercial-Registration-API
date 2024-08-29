import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { FaList } from "react-icons/fa";
import { PartyCard } from "./party";
import { partiesType } from "../data/dataTypes";

export function PartiesModal(props: {label: string, parties: partiesType | undefined}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button isDisabled={props.parties === undefined} onPress={onOpen} color="danger" variant="flat" startContent={<FaList />}>{props.label}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" className="light text-foreground bg-background">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.label}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  { props.parties != undefined? props.parties.map((party) => 
                      <PartyCard name={party.name}
                      nationality={party.nationality?.name? party.nationality.name: "-"}
                      birthdate={party.birthDate? party.birthDate: "-"}
                      relation={party.relation.name} />
                  ): <PartyCard name="لايوجد" nationality="-" birthdate="-" relation="-" />
                  }
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
