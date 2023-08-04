import { initalizeTimes, updateTimes } from "./Main";

test('updateTimes adds a new time slot when action type is "add"', () => {
    const state = [{date: "2023-08-04", times: ["17:00", "18:00"]}];
    const action = {type: "add", date: "2023-08-05", times: ["19:00", "20:00"] };

    const result = updateTimes(state, action);

    expect(result).toEqual([{date: "2023-08-04", times: ["17:00", "18:00"]},
        {date: "2023-08-05", times: ["19:00", "20:00"]}
    ]);
});

test('updateTimes deletes a time slot when action type is "delete"', () => {
    const state = [{date: "2023-08-04", times: ["17:00", "18:00"] }];
    const action = {type: "delete", date: "2023-08-04", time: "17:00" };

    const result = updateTimes(state, action);

    expect(result).toEqual([{ date: "2023-08-04", times: ["18:00"] }]);
});