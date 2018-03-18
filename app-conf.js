module.exports = {
    app: 'nima',
    appId: '7024e980-8cd8-11e5-89fe-370bd1e969e9',
    description: '尼玛',
    common: 'gb',
    moduleList: ['gb', 'hh', 'lp'],
    platform: 'mobile',
    versionControl: 'git',
    comboConf: {
        mode: 'server', // server/client
        server: {
            flag: '??', // server端合并时的分割标识，如某Url //static.360buyimg.com/nima??/gb/common_d6e4c134.css,/hh/jj_5e52390b.css,/hh/topbar_17c154d1.css,/hh/banner_2dc311a1.css,/hh/hello_1ed059f2.css
            onlineDomain: '//static.360buyimg.com/', // 服务端合并的线上域名
            shortPath: 'nima' // 次级目录
        }
    }
}