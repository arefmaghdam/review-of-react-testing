import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestingLists = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // src/components/UserList.tsx codes:
        import { User } from "../entities";

        const UserList = ({ users }: { users: User[] }) => {
          if (users.length === 0) return <p>No users available.</p>;
        
          return (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <a href={'/users/{user.id}'}>{user.name}</a>
                </li>
              ))}
            </ul>
          );
        };

        export default UserList;
    // tests/components/UserList.test.tsx codes:
        import { render, screen } from "@testing-library/react";
        import UserList from "../../src/components/UserList";
        import { User } from "../../src/entities";
        
        describe("UserList", () => {
          it("should render no users when the users array is empty", () => {
            render(<UserList users={[]} />);
            expect(screen.getByText(/no users/i)).toBeInTheDocument();
          });
      
          it("should render a list of users", () => {
            const users: User[] = [
              { id: 1, name: "Mosh" },
              { id: 2, name: "John" },
            ];
            render(<UserList users={users} />);
            users.forEach((user) => {
              const link = screen.getByRole("link", { name: user.name });
              expect(link).toBeInTheDocument();
              expect(link).toHaveAttribute("href", '/users/{user.id}');
            });
          });
        });
    // all the query methods like screen.getByRoll() have other arguments which is optional, you can find the details in the documentation, for example:
      getByRole(
        // If you're using 'screen', then skip the container argument:
        container: HTMLElement,
        role: string,
        options?: {
          hidden?: boolean = false,
          name?: TextMatch,
          description?: TextMatch,
          selected?: boolean,
          busy?: boolean,
          checked?: boolean,
          pressed?: boolean,
          suggest?: boolean,
          current?: boolean | string,
          expanded?: boolean,
          queryFallbacks?: boolean,
          level?: number,
          value?: {
            min?: number,
            max?: number,
            now?: number,
            text?: TextMatch,
          }
        }): HTMLElement
        `}
      />
    </div>
  );
};

export default TestingLists;
