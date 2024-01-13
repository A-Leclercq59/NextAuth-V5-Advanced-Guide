import { UserInfo } from "@/components/user/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  console.log(user);

  return <UserInfo user={user} label="Server Component" />;
};

export default ServerPage;
