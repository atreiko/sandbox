import { Header } from "./Header";
import { render } from "@testing-library/react";

describe("Testing Header.js", () => {
  test("Smoke test of Header", () => {
    render(<Header />);
  });

  test("Header shows title from props", () => {
    const testTitle = "TEST TITLE";
    const { /*container,*/ getByText, getByTestId } = render(
      <Header title={testTitle} />
    );

    const title = getByText(testTitle);
    expect(title).toBeInTheDocument();
    // getByTestId('testTitle')
  });

  test("User login div is not shown when user is not passed in props", () => {
    render(<Header />);

    const login = document.getElementById("user-login");
    expect(login).toBe(null);
  });

  test("User login is shown when user is passed in props", () => {
    const testUser = { login: "TEST_LOGIN" };
    const { getByText } = render(<Header user={testUser} />);
    getByText(testUser.login);
  });
});

describe("Snapshot testing Header.js", () => {
  test("Simple header render", () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("Rendering header with title", () => {
    const { container } = render(<Header title="TEST_TITLE" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("Rendering header with user", () => {
    const { container } = render(<Header user={{ login: "TEST_USER" }} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("Inline snapshot of header", () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"header\\"><h2 class=\\"header__title\\">Header - class component!</h2><div id=\\"header-title\\" data-testid=\\"testTitle\\">Default title</div></div>"`
    );
  });
});
