function urlExists(url: string, callback: (exist: boolean) => void): void {
  fetch(url, { method: 'head' })
    .then(function (status) {
      callback(status.ok);
    })
    .finally(() => {
      return;
    });
}

export { urlExists };
