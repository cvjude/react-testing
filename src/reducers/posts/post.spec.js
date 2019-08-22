import { types } from "./../../actions/types";
import postReducer from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if recieving type", () => {
    const posts = [{ title: "Test1" }, { title: "Test1" }, { title: "Test1" }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
