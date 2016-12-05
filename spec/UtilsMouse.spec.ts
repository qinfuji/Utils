"use strict";

declare var describe: any;
declare var it: any;
declare var expect: any;

import UtilsMouse from "../lib/UtilsMouse";

describe("UtilsMouse", () => {
    it("UtilsMouse", () => {
        expect(typeof(UtilsMouse)).toEqual("function");
    });

    it("UtilsMouse.getWheelDelta", () => {
        let evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("wheel", true, true, window, 10, 10, 10, 80, 20, false, false, false, false, 10, null);

        let paramsValues = [evt, undefined, null, false, true, 123, "test", window, window.document, window.document.body];
        for (let paramsValue of paramsValues) {
            let result = UtilsMouse.getWheelDelta(paramsValue);

            expect(typeof(result)).toEqual("number");

            if (paramsValue === evt) {
                expect(result).toBeCalculable();
            } else {
                expect(result).toBeNaN();
            }
        }
    });
});