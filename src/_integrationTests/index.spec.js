import moxios from "moxios";
import { testStore } from "./../../helper";
import { fetchPosts } from "./../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("Store should update correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some test"
      },
      {
        title: "Example title 2",
        body: "Some test"
      },
      {
        title: "Example title 3",
        body: "Some test"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });

      return store.dispatch(fetchPosts()).then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      });
    });
  });
});
