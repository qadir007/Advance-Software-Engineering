import UserBuilder from "./UserBuilder";

const builderTesting = () => {
  const builder = new UserBuilder();
  builder.setFirstName("Abdul");
  builder.setLastName("Qadir");
  const user = builder.build();
  console.log("user");
  console.log(user);
  
};

export default builderTesting;
