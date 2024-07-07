import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import CodePreview from "../code-preview";

const TestingUserAccount = () => {
  return (
    <div className={styles.subPages}>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // src/components/UserAccount.tsx codes:
        import { User } from "../entities";

        const UserAccount = ({ user }: { user: User }) => {
          return (
            <>
              <h2>User Profile</h2>
              {user.isAdmin && <button>Edit</button>}
              <div role="">
                <strong>Name:</strong> {user.name}
              </div>
            </>
          );
        };

        export default UserAccount;
    // tests/components/UserAccount.test.tsx codes:
        import { render, screen } from "@testing-library/react";
        import { User } from "../../src/entities";
        import UserAccount from "../../src/components/UserAccount";
        
        describe("UserAccount", () => {
          it("should render user name", () => {
            const user: User = { id: 1, name: "Mosh" };
            render(<UserAccount user={user} />);
            expect(screen.getByText(user.name)).toBeInTheDocument();
          });
      
          it("should render edit button if user is admin", () => {
            const user: User = { id: 1, name: "Mosh", isAdmin: true };
            render(<UserAccount user={user} />);
            const button = screen.getByRole("button");
            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/edit/i);
          });
      
          it("should not render edit button if user is not admin", () => {
            const user: User = { id: 1, name: "Mosh" };
            render(<UserAccount user={user} />);
            const button = screen.queryByRole("button");
            expect(button).not.toBeInTheDocument(); 
          });
        });
    
        `}
      />
    </div>
  );
};

export default TestingUserAccount;
