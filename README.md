# OverLog

A library that helps override console.log and provides a bit more logging options

```
npm i @birajmainali/over-log
```

### Usages

```js
useOverLog({
  appMode: "Development",
  onLog: (params) => toaster.info(params),
})
```
