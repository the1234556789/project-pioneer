// ===== 全局登录态管理 =====
var AUTH = {
  KEY: 'pp_user',
  USERS_KEY: 'pp_users',
  LOGIN_URL: 'https://the1234556789.github.io/project-pioneer/login/?continue=https%3A%2F%2Fthe1234556789.github.io%2Fproject-pioneer%2Findex.html',

  // 获取当前用户
  getUser: function() {
    return JSON.parse(localStorage.getItem(this.KEY) || 'null');
  },

  // 是否已登录
  isLogin: function() {
    return this.getUser() !== null;
  },

  // 登录
  login: function(email, password) {
    var users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '{}');
    if (users[email] && users[email].password === password) {
      var username = users[email].username || email.split('@')[0];
      localStorage.setItem(this.KEY, JSON.stringify({ email: email, username: username }));
      return true;
    }
    return false;
  },

  // 注册
  register: function(email, password) {
    var users = JSON.parse(localStorage.getItem(this.USERS_KEY) || '{}');
    if (users[email]) return false;
    var username = email.split('@')[0];
    users[email] = { password: password, username: username };
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    localStorage.setItem(this.KEY, JSON.stringify({ email: email, username: username }));
    return true;
  },

  // 退出
  logout: function() {
    localStorage.removeItem(this.KEY);
  },

  // 刷新右上角状态（所有页面统一调用）
  renderBar: function() {
    var el = document.getElementById('abar');
    if (!el) return;

    var u = this.getUser();
    if (u) {
      el.innerHTML =
        '<a href="https://the1234556789.github.io/project-pioneer/profile.html" class="abtn">' +
          '<span class="user-chip">' + (u.username || u.email || 'U').charAt(0).toUpperCase() + '</span>' +
          '<span class="user-name">' + (u.username || u.email) + '</span>' +
        '</a>' +
        '<button onclick="AUTH.logoutAndRefresh()" class="btn-logout">退出登录</button>';
    } else {
      el.innerHTML =
        '<button onclick="location.href=\'' + this.LOGIN_URL + '\'" class="btn-login-nav">登录</button>' +
        '<button onclick="location.href=\'' + this.LOGIN_URL + '&signup=1\'" class="btn-reg-nav">注册</button>';
    }

    // 同步上传悬浮按钮显示/隐藏
    var fab = document.getElementById('uploadFab');
    if (fab) fab.style.display = u ? 'block' : 'none';
  },

  // 退出并刷新
  logoutAndRefresh: function() {
    this.logout();
    this.renderBar();
    if (location.pathname.indexOf('profile.html') > -1) {
      location.href = 'https://the1234556789.github.io/project-pioneer/index.html';
    }
  },

  // 要求登录
  requireLogin: function() {
    if (!this.isLogin()) {
      location.href = this.LOGIN_URL;
      return false;
    }
    return true;
  }
};