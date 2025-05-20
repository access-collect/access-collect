import { replaceEmptyValueByNull } from "@/lib/utils";

describe("Test function replaceEmptyValueByNull", () => {
    it("return à null value if string is empty", async () => {
        const fakeFormData = new FormData();
        fakeFormData.append("username", "");

        const result = await replaceEmptyValueByNull(fakeFormData)
        expect(result).toEqual({username : null});
    });

    it("return value if string is not empty", async () => {
        const fakeFormData = new FormData();
        fakeFormData.append("username", "Test");

        const result = await replaceEmptyValueByNull(fakeFormData)
        expect(result).toEqual({username : "Test"});
    });
});