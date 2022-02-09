const setCommand = function (button, func) {
  button.onclick = function () {
    func();
  };
};
const MenuBar = {
  refresh() {
    console.log('刷新菜单界面');
  },
};
const RefreshMenuBarCommand = function (receiver) {
  return function () {
    receiver.refresh();
  };
};
const refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);

setCommand('button1', refreshMenuBarCommand);
