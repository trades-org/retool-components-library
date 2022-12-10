import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import {DragAndDrop} from "../../src/components"
import { mockData } from "./drag-and-drop.helper"

export default {
    title: "Components/Drag and Drop",
    component: DragAndDrop,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "white",
        },
    },
} as ComponentMeta<typeof DragAndDrop>

const DragAndDropComponent: ComponentStory<typeof DragAndDrop> = (args) => <DragAndDrop {...args} />

export const Default = DragAndDropComponent.bind({})
Default.args = {
    data: mockData
}