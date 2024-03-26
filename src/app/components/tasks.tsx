"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export function Task(){
    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="">

                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className=""/>

                <Dialog.Content className="">

                    <Dialog.Close className="">
                        <X/>
                    </Dialog.Close>

                    <div className="">
                        
                    </div>
                    
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}