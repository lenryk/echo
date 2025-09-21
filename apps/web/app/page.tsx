"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const add = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">app/web</h1>
            {users?.map((user) => (
              <p key={user._id}>{user.name}</p>
            ))}
            <Button onClick={() => add()}>Add</Button>
            <UserButton />
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <h1>Must be signed in</h1>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
