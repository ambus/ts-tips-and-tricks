let dataWithLog: any = {
    tipsAndTricks: {
      log: (text) => console.warn(text)
    },
  }
  dataWithLog?.tipsAndTricks?.log?.('Hello')
  dataWithLog?.tipsAndTricks2?.log?.('Hello2')
  
  