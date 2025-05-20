import {getUserDataWithEmail} from "@/lib/userQuery";
import { db } from "@/lib/drizzle";

jest.mock('@/lib/drizzle', () => ({
    db: {
        query: {
            user: {
                findFirst: jest.fn(),
            },
        },
    },
}));

describe("getUserDataWithEmail", () => {
    it("return a user if it find", async () => {
        const fakeUser = { id: 1, email: "test@example.com", name: "John" };

        (db.query.user.findFirst as jest.Mock).mockResolvedValue(fakeUser);

        const response = await getUserDataWithEmail("test@example.com");

        expect(db.query.user.findFirst).toHaveBeenCalledWith({
            where: expect.any(Function),
        });

        expect(response).toEqual({ result: fakeUser });
    });

    it("return an error if not user", async () => {
        (db.query.user.findFirst as jest.Mock).mockResolvedValue(null);

        const response = await getUserDataWithEmail("unknown@example.com");

        expect(response).toEqual({ error: "user not found" });
    });
});