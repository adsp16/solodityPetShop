const Adoption = artifacts.require("Adoption");



contract("Adoption", (accounts) => {

    let adoption;
    let expectedPetId;

    before(async () => {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retreiving account address", async () => {

      before("adopt a pet using account", async () => {
            await adoption.adopt(8, {from : accounts[0]});
            expectedAdopter = accounts[0];
      })

      it("can fetch the address of an owner by pet id", async () => {
        
        const adopter = await adoption.adopt(8);
        assert(adopter, expectedAdopter, "The owner of the owner should be account one")

      })

      it('Can fetch all adopters addresses', async() => {

        const adoptArr = await adoption.getAdopters();
        assert.equal(adoptArr[8], expectedAdopter, "The owner of PetId should be at position 8 of the adopters")

      })
    });
});

