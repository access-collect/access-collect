import { db } from "@/lib/drizzle";
import { getOrganisation } from "@/lib/organisationQuery";
import { Organisation } from "@/lib/schema/organisation";

jest.mock("@/lib/drizzle", () => ({
  db: {
    query: {
      organisation: {
        findFirst: jest.fn(),
      },
    },
  },
}));
describe("test get organisation with id", () => {
  it("return organisation", async () => {
    const fakeOrganisation: Organisation = {
      id: "1",
      name: "Fake-Orga",
      address: "rue du test",
      phoneNumber: "1234567890",
      contact: "test contact",
      agrementNumber: "1234567890",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    (db.query.organisation.findFirst as jest.Mock).mockResolvedValue(
      fakeOrganisation,
    );
    const response = await getOrganisation("1");
    expect(db.query.organisation.findFirst).toHaveBeenCalled();
    expect(response).toEqual(fakeOrganisation);
  });

  it("return an error if organisation is not found", async () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (db.query.organisation.findFirst as jest.Mock).mockResolvedValue(null);
    await getOrganisation("4");
    expect(consoleSpy).toHaveBeenCalledWith("Error: Organisation not found");
    consoleSpy.mockRestore();
  });
});
