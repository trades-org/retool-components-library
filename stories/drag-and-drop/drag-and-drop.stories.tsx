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
    argTypes: {
        isDragColumnsEnabled: {
            control: {
                type: "boolean",
            },
        },
    }
} as ComponentMeta<typeof DragAndDrop>

const DragAndDropComponent: ComponentStory<typeof DragAndDrop> = (args) => <DragAndDrop {...args} />

export const Default = DragAndDropComponent.bind({})
Default.args = {
    data: mockData
}

export const CandidatesWithClick = DragAndDropComponent.bind({})
CandidatesWithClick.args = {
    data: mockData,
    onClickRow: (row) => alert(`You clicked on ${row.content}`),
    rowClassNames: {
        rowWrapperClassNames: "bg-gray-100 mb-2",
    }
}

export const CandidatesMultiSelect = DragAndDropComponent.bind({})
CandidatesMultiSelect.args = {
    data: mockData,
    rowClassNames: {
        rowWrapperClassNames: "bg-gray-100 mb-2",
    }
}