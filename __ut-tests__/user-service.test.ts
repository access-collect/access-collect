import { checkPasswordValidity, hashPassword } from "@/lib/userQuery";
jest.mock("@/lib/userQuery");

const mockedHashPassword = hashPassword as jest.MockedFunction<
  typeof hashPassword
>;
const mockedCheckPasswordValidity =
  checkPasswordValidity as jest.MockedFunction<typeof checkPasswordValidity>;

describe("hashPassword", () => {
  it("Should return a hashed password", async () => {
    mockedHashPassword.mockResolvedValue("hashedPassword");
    mockedCheckPasswordValidity.mockResolvedValue(true);

    const password = "monmotdepasse69";
    const hashed = await hashPassword(password);

    expect(hashed).toBeDefined();

    expect(hashed).not.toBe(password);

    const isValid = await checkPasswordValidity(password, hashed!);
    expect(isValid).toBe(true);
  });

  it("Should throw an error if hashing fails", async () => {
    mockedHashPassword.mockRejectedValue(new Error("Simulated error"));
    await expect(hashPassword("test")).rejects.toThrow("Simulated error");
  });
});
