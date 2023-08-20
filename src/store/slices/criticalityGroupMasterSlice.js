import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     criticalityGroupID: '',
//     criticalityGroupName: '',
// }

const criticalityGroupMasterSlice = createSlice({
    name: 'criticalityGroupMaster',
    initialState: {
        criticalityGroup: []
    },
    reducers: {
        addCriticality: (state, action) => {
            const item = state.criticalityGroup.find(
                (i) => i.key === action.payload.key
            );

            if (item) {
                console.log(item)
            } else {
                state.criticalityGroup.push({ ...action.payload });
            }
        }
    }
})

export const { addCriticality } = criticalityGroupMasterSlice.actions;

export default criticalityGroupMasterSlice.reducer