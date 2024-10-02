import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "iconshiro": "url(https://64.media.tumblr.com/8056bfff51dcc3f18388039aab78e460/6e6ab721205d3e84-a2/s2048x3072/038ac6b1b541bb2f7fd197a76fa9e2bc80f06ca1.pnj)",
        "iconkuro": "url(https://64.media.tumblr.com/9366f0a5e5f0b10340250da27416617d/6e6ab721205d3e84-a7/s2048x3072/800e2d4139409f1cf720401cb154f890af9ab7fd.jpg)",
        "white": "url('/assets/images/1.png')",
        "monster00Icon": "url(https://64.media.tumblr.com/d0621453cbb79178bff6c4c1d6e39422/f40ee5d0002a0086-ed/s540x810/55c0285517d2ea1f4ef3226137357450cc1d43bd.pnj)",
        "monster01Icon": "url(https://64.media.tumblr.com/bce7cfc99310e1070c352d52377aa6bf/f40ee5d0002a0086-fd/s640x960/21aaa94f49f16ba1300c8d1ae13bb677685f28c8.pnj)",
        "monster02Icon": "url(https://64.media.tumblr.com/05b3b0d7f83c25c769392381fd5fcc60/a667455ff75a1a8f-95/s1280x1920/67192c0f8a86ddabf55ad68a8c9c327fe6ee5803.pnj)",
        "monster03Icon": "url(https://64.media.tumblr.com/53773cfe018ed7a8e75aa884381aaa52/2acfe1f34ac032a7-32/s1280x1920/250378003e6337e335f522d2462f2ac9f869c50f.pnj)",
        "monster04Icon": "url(https://64.media.tumblr.com/d2baf5b87e70803f0148645ea3a26287/a12e32c30bcac90a-c0/s1280x1920/5b5a398cdaa98317c86f704df8766ccaaa016ca2.pnj)",
        "monster05Icon": "url(https://64.media.tumblr.com/aeefa819ddd75314c822ab4a49891c95/ed6d74a54282a46e-49/s1280x1920/dc4abdd37915c4c29da23b54d1b3ebcc7107764d.pnj)",
        "monster06Icon": "url(https://64.media.tumblr.com/fb298fe82a3f609e0923f60fb6a25d91/045281dee914609a-6e/s500x750/8672d0468a72c8aff49c32465cb12306ec072858.pnj)",
        "monster07Icon": "url(https://64.media.tumblr.com/26d1eff839cc1dbd8bcbfcb6ebe06bcb/ea3022d51fce90a9-c9/s500x750/97fe74fb7a6a39919b7f0dd9f96528e1b4b6c49b.pnj)",
        "monster08Icon": "url(https://64.media.tumblr.com/a3f308c380821478d94653cd38dfb6e1/36c63b5e36f1d6d5-d5/s640x960/122c5cb371b646f7d20bc533a8376818873459bb.pnj)",
        "monster09Icon": "url(https://64.media.tumblr.com/c9da8dcac6f1e6d35b92ff18b47b8240/999821e19a4df915-a3/s1280x1920/e989366cf4188d8104382f6daf0f043e184072fd.pnj)",
        "monster10Icon": "url(https://64.media.tumblr.com/0a3f6164d559b1d662519e5a994e00f0/c1097cf44544430c-dd/s1280x1920/51f8975b623623fcfe09959ce68f5788eb02c485.pnj)",
        "monster11Icon": "url(https://64.media.tumblr.com/1a4281a6ab86b60a95c2d885d0a2eb82/2bdcabefda77d88c-f3/s500x750/235a07c911e7a827939699d8646d2d73d3a6b4a4.pnj)",
        "monster12Icon": "url(https://64.media.tumblr.com/ee8a5f8fa9ef324c068779c60f2204a0/6d5a86fca3a3de23-5c/s500x750/7299e2c1d57b88ca2a99acfc57158832f4a9691c.pnj)",
        "monster13Icon": "url(https://64.media.tumblr.com/c7962b90fc6233ade7952d1a442663dd/def17e8d6aa3b7a0-32/s500x750/0b49da1798c876da7a24f96b61bfbbcada982511.pnj)",
        "monster14Icon": "url(https://64.media.tumblr.com/b45cf5e43db86ed0727497f2b6b44acb/0d9d8190c55b228b-64/s500x750/264637e0297350612b59d7b28c7fc3a06f3b4f99.pnj)",
        "monster15Icon": "url(https://64.media.tumblr.com/fba2a706f83d2c0731d98934050eee4a/e01496bf21283ca6-3a/s500x750/f7a976667a77620dcff58abdfbbe528fde9e1079.pnj)",
        "monster16Icon": "url(https://64.media.tumblr.com/1bb8b620d1b2aadab70974e6d62a10f1/a81f48cdfc6dae36-32/s500x750/42e79bfc8cbe6b9f84963cc1a601367ce7374bfe.pnj)",
        "monster17Icon": "url(https://64.media.tumblr.com/4733840b988a7094f5a99d8d92477fa9/d9df83dc476eb46d-3c/s500x750/be8b83f6b34789dce8aaf926f866511687c91bfd.pnj)",
        "monster18Icon": "url(https://64.media.tumblr.com/6158129d321031a1c60eeed98f8b9b2f/252a883627cc4cf9-1a/s500x750/a3d49c493f46d53883572234771c915f962ba0ab.pnj)",
        "monster19Icon": "url()",
        "monster20Icon": "url()",
        "monster21Icon": "url()",
        "monster22Icon": "url()",
        "monster23Icon": "url()",
        "monster24Icon": "url()",
        "monster25Icon": "url()",
        "monster26Icon": "url()",
        "monster27Icon": "url()",
        "monster28Icon": "url()",
        "monster29Icon": "url()",
        "monster30Icon": "url()",
        "monster31Icon": "url()",

      },
      colors: {
        'minty': '#76ABAE',
        'shiro': '#F6F5F2',
        'noir': '#373A40',
        'lefu': '#31363F',
      },
    },
  },
  plugins: [],
};


export default config;
//company: "url(/images/banners/company@2x.jpg)",
//./assets/images/bg_2.png
/*
extend: {
      clipPath: {
        'left-triangle': 'polygon(0 0, 100% 0, 0 100%)',
      },
*/