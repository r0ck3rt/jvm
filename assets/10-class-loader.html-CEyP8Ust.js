import{_ as e,c as s,a as l,o}from"./app-BbxH2Yoy.js";const t={};function n(c,a){return o(),s("div",null,a[0]||(a[0]=[l('<h1 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h1><h2 id="类与类加载器" tabindex="-1"><a class="header-anchor" href="#类与类加载器"><span>类与类加载器</span></a></h2><h3 id="判断类是否-相等" tabindex="-1"><a class="header-anchor" href="#判断类是否-相等"><span>判断类是否“相等”</span></a></h3><p>任意一个类，都由<strong>加载它的类加载器</strong>和这个<strong>类本身</strong>一同确立其在 Java 虚拟机中的唯一性，每一个类加载器，都有一个独立的类名称空间。</p><p>因此，比较两个类是否“相等”，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个虚拟机加载，只要加载它们的类加载器不同，那么这两个类就必定不相等。</p><p>这里的“相等”，包括代表类的 Class 对象的 <code>equals()</code> 方法、<code>isInstance()</code> 方法的返回结果，也包括使用 instanceof 关键字做对象所属关系判定等情况。</p><h3 id="加载器种类" tabindex="-1"><a class="header-anchor" href="#加载器种类"><span>加载器种类</span></a></h3><p>系统提供了 3 种类加载器：</p><ul><li>启动类加载器（Bootstrap ClassLoader）： 负责将存放在 <code>&lt;JAVA_HOME&gt;\\lib</code> 目录中的，并且能被虚拟机识别的（仅按照文件名识别，如 rt.jar，名字不符合的类库即使放在 lib 目录中也不会被加载）类库加载到虚拟机内存中。</li><li>扩展类加载器（Extension ClassLoader）： 负责加载 <code>&lt;JAVA_HOME&gt;\\lib\\ext</code> 目录中的所有类库，开发者可以直接使用扩展类加载器。</li><li>应用程序类加载器（Application ClassLoader）： 由于这个类加载器是 ClassLoader 中的 <code>getSystemClassLoader()</code> 方法的返回值，所以一般也称它为“系统类加载器”。它负责加载用户类路径（classpath）上所指定的类库，开发者可以直接使用这个类加载器，如果应用程序中没有自定义过自己的类加载器，一般情况下这个就是程序中默认的类加载器。</li></ul><p><img src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/jvm@main/images/classloader.png" alt="ClassLoader"></p><p>当然，如果有必要，还可以加入自己定义的类加载器。</p><h2 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型"><span>双亲委派模型</span></a></h2><h3 id="什么是双亲委派模型" tabindex="-1"><a class="header-anchor" href="#什么是双亲委派模型"><span>什么是双亲委派模型</span></a></h3><p>双亲委派模型是描述类加载器之间的层次关系。它要求除了顶层的启动类加载器外，其余的类加载器都应当有自己的父类加载器。（父子关系一般不会以继承的关系实现，而是以组合关系来复用父加载器的代码）</p><h3 id="工作过程" tabindex="-1"><a class="header-anchor" href="#工作过程"><span>工作过程</span></a></h3><p>如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此，因此所有的加载请求最终都应该传送到顶层的启动类加载器中，只有当父加载器反馈自己无法完成这个加载请求（找不到所需的类）时，子加载器才会尝试自己去加载。</p><p>在 java.lang.ClassLoader 中的 <code>loadClass</code> 方法中实现该过程。</p><h3 id="为什么使用双亲委派模型" tabindex="-1"><a class="header-anchor" href="#为什么使用双亲委派模型"><span>为什么使用双亲委派模型</span></a></h3><p>像 java.lang.Object 这些存放在 rt.jar 中的类，无论使用哪个类加载器加载，最终都会委派给最顶端的启动类加载器加载，从而使得不同加载器加载的 Object 类都是同一个。</p><p>相反，如果没有使用双亲委派模型，由各个类加载器自行去加载的话，如果用户自己编写了一个称为 java.lang.Object 的类，并放在 classpath 下，那么系统将会出现多个不同的 Object 类，Java 类型体系中最基础的行为也就无法保证。</p>',20)]))}const d=e(t,[["render",n]]),m=JSON.parse('{"path":"/10-class-loader.html","title":"类加载器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"类与类加载器","slug":"类与类加载器","link":"#类与类加载器","children":[{"level":3,"title":"判断类是否“相等”","slug":"判断类是否-相等","link":"#判断类是否-相等","children":[]},{"level":3,"title":"加载器种类","slug":"加载器种类","link":"#加载器种类","children":[]}]},{"level":2,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[{"level":3,"title":"什么是双亲委派模型","slug":"什么是双亲委派模型","link":"#什么是双亲委派模型","children":[]},{"level":3,"title":"工作过程","slug":"工作过程","link":"#工作过程","children":[]},{"level":3,"title":"为什么使用双亲委派模型","slug":"为什么使用双亲委派模型","link":"#为什么使用双亲委派模型","children":[]}]}],"git":{"updatedTime":1660099460000,"contributors":[{"name":"yanglbme","username":"yanglbme","email":"szuyanglb@outlook.com","commits":13,"url":"https://github.com/yanglbme"},{"name":"杨立滨","username":"杨立滨","email":"contact@yanglibin.info","commits":1,"url":"https://github.com/杨立滨"},{"name":"Yang Libin","username":"Yang Libin","email":"szuyanglb@outlook.com","commits":1,"url":"https://github.com/Yang Libin"}],"changelog":[{"hash":"ffe36a875d09e4665fc0ebbaf221d4fe063d1804","time":1660099460000,"email":"szuyanglb@outlook.com","author":"Yang Libin","message":"chore: update image path"},{"hash":"87857bb363b31c6b3410e350ec4ea967d4d0f5b5","time":1623891916000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"chore: move images to root path"},{"hash":"eb967d76db398be3d4718d9140d8f4663e97622f","time":1608651434000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"docs: improve readability"},{"hash":"b9ac90393daa17ac91f072406788d0320cd7ef97","time":1603199026000,"email":"yanglbme@users.noreply.github.com","author":"yanglbme","message":"docs: prettify code"},{"hash":"44141143eaf33a804d08844e6437b0dc4995261e","time":1586069633000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"feat: add docsify and pagination"},{"hash":"15106123780332a9ae661e9d4b8ae352e0bed39c","time":1546759880000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"docs: remove gitbook _config"},{"hash":"7259a066b4ffe6f2bc7cf5a5d74a461972409a64","time":1542376316000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"docs(img): change img path"},{"hash":"5812abcddf7be190ae25ff2f4fae537c1d75953c","time":1531985256000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Update index"},{"hash":"fc29eb9f65b88bdd5dd5dcb0cc2ef782e463ff3b","time":1531984929000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Add Index"},{"hash":"7a92c0e4989eb8136143d52d2281fb15257b44be","time":1531278268000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Write EOF"},{"hash":"44bb9a33ee01e13ffc8817d77cfee3fefb474161","time":1530252948000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Change path"},{"hash":"99ce82b1d8aa7c6e6451e108e35dfd958c05420c","time":1530186676000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Remove TOC"},{"hash":"a112cfd4f8cbd9de87c68112101c0ce4ed4a3fe5","time":1530183324000,"email":"contact@yanglibin.info","author":"杨立滨","message":"GitBook: [master] 12 pages modified"},{"hash":"8e728b0cad40c3629921947eb8f1da1fff7408ba","time":1530004798000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Update 10-class-loader.md"},{"hash":"d2af1e96fbea284acdb94139f43ec33ec7de8880","time":1530004526000,"email":"szuyanglb@outlook.com","author":"yanglbme","message":"Create 10-class-loader.md"}]},"filePathRelative":"10-class-loader.md"}');export{d as comp,m as data};
