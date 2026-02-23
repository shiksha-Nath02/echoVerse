```js
app.post("/login", async (req, res) => {
  const user = await User.findOne();
});
```
