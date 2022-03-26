(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{369:function(a,t,s){"use strict";s.r(t);var n=s(0),v=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"一、java语言的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、java语言的特点"}},[a._v("#")]),a._v(" 一、Java语言的特点")]),a._v(" "),s("h4",{attrs:{id:"_1-平台无关性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-平台无关性"}},[a._v("#")]),a._v(" 1. 平台无关性")]),a._v(" "),s("p",[a._v("用Java语言编写的程序可以不经改动(或很少改动)就可以在不同的硬件平台和操作系统上执行.Java编译器所生成的字节码运行于Java虚拟机(JavaVirualMachine,JVM)上,这是实现Java平台无关性的关键.")]),a._v(" "),s("h4",{attrs:{id:"_2-面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-面向对象"}},[a._v("#")]),a._v(" 2. 面向对象")]),a._v(" "),s("p",[a._v("Java是一种面向对象编程语言,实现了面向对象编程的三大特性:封装、继承、多态.")]),a._v(" "),s("h4",{attrs:{id:"_3-多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-多线程"}},[a._v("#")]),a._v(" 3. 多线程")]),a._v(" "),s("p",[a._v("Java语言提供对多线程的语言级支持. 这一点优于C++, C++没有内置的多线程, 必须调用操作系统的多线程编程接口.")]),a._v(" "),s("h4",{attrs:{id:"_4-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安全"}},[a._v("#")]),a._v(" 4. 安全")]),a._v(" "),s("p",[a._v("Java不支持C语言的指针操作,避免了指针访问内存带来的不安全性.Java语言能够自动搜集并清除“内存垃圾”,并提供字节码校验和文件访问限制等安全机制.")]),a._v(" "),s("h4",{attrs:{id:"_5-动态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-动态"}},[a._v("#")]),a._v(" 5. 动态")]),a._v(" "),s("p",[a._v("Java程序的基本组成单元是类,各个类是独立编译、动态加载的,运行哪个类就加载哪个类,而非一次性的把程序中所有类都加载.这样Java可以动态地维护类库,从而避免像C++类库的静态联编那样,改变一个类其他所有类都要重新编译链接.Java的方法调用在默认情况下是动态绑定的(也就是运行时再绑定),这对于实现多态比较便利.")]),a._v(" "),s("h3",{attrs:{id:"二、java程序的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、java程序的分类"}},[a._v("#")]),a._v(" 二、Java程序的分类")]),a._v(" "),s("h4",{attrs:{id:"_1-java应用程序-javaapplication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-java应用程序-javaapplication"}},[a._v("#")]),a._v(" 1. Java应用程序(JavaApplication)")]),a._v(" "),s("p",[a._v("使用Java语言开发的,在电脑上独立运行的程序.")]),a._v(" "),s("h4",{attrs:{id:"_2-applet小程序-javaapplet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-applet小程序-javaapplet"}},[a._v("#")]),a._v(" 2. Applet小程序(JavaApplet)")]),a._v(" "),s("p",[a._v("内嵌于网页文件中,由浏览器来执行的一小段Java代码.")]),a._v(" "),s("h4",{attrs:{id:"_3-servlet小程序-javaservlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-servlet小程序-javaservlet"}},[a._v("#")]),a._v(" 3. Servlet小程序(JavaServlet)")]),a._v(" "),s("p",[a._v("用Java语言开发的程序,由Web服务器调用,运行于Web服务器上,运行结果生成HTML文件,由服务器返还给浏览器.在Servlet的基础上进行封装就得到JSP动态网页开发技术.")]),a._v(" "),s("h3",{attrs:{id:"三、java虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、java虚拟机"}},[a._v("#")]),a._v(" 三、Java虚拟机")]),a._v(" "),s("p",[a._v("Java虚拟机(JVM)是在物理计算机中用软件模拟的一种抽象计算机,是Java平台独立性的基础.")]),a._v(" "),s("ul",[s("li",[a._v("Java编译器将Java源程序编译成字节码,JVM用于执行字节码,从用户的角度看就好像是Java虚拟机在运行程序.")]),a._v(" "),s("li",[a._v("由于字节码具有统一的标准与格式,在不同平台上编译生成的字节码是相同的,因而可以被各个平台上的JVM所接受,从而实现了跨平台运行.")]),a._v(" "),s("li",[a._v("JVM的解释器负责将每一条字节码都编译成当前硬件平台的可执行机器码,然后交给硬件平台执行.")])]),a._v(" "),s("p",[a._v("JVM执行字节码,分三个阶段:")]),a._v(" "),s("ul",[s("li",[a._v("字节码装入:由类装配器(classloader)完成.")]),a._v(" "),s("li",[a._v("字节码校验:用于检查字节码有无错误及非法操作.")]),a._v(" "),s("li",[a._v("字节码运行:通过校验后将字节码翻译成机器码执行.")])]),a._v(" "),s("h3",{attrs:{id:"四、java源程序的构成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、java源程序的构成"}},[a._v("#")]),a._v(" 四、Java源程序的构成")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HelloWorld!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Aa")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("ol",[s("li",[a._v("Java程序以类为基本单元,每个Java程序由一个或若干个类组成,每个类有自己的变量和方法.")]),a._v(" "),s("li",[a._v("每个Java程序有且仅有一个包含public static void main(String args[])方法的类,这个类称为主类,这个方法称为main方法.\nJava程序总是从主类的main方法开始执行.")]),a._v(" "),s("li",[a._v("可以将每个类放入不同的源文件,也可以将若干个类放入同一个源文件.")])]),a._v(" "),s("p",[a._v("Java源文件命名规则如下:")]),a._v(" "),s("ul",[s("li",[a._v("如果源文件中有多个类,那么只能有一个类是public类(定义时用public修饰的类).")]),a._v(" "),s("li",[a._v("如果有一个类是public类,那么源文件的名字必须与这个类名字相同,扩展名是.java.")]),a._v(" "),s("li",[a._v("源文件中可以没有public类,这种情况下源文件可以随意起名,扩展名是.java就可以.")])]),a._v(" "),s("h3",{attrs:{id:"五、java程序的开发步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、java程序的开发步骤"}},[a._v("#")]),a._v(" 五、Java程序的开发步骤")]),a._v(" "),s("h4",{attrs:{id:"第一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[a._v("#")]),a._v(" 第一步")]),a._v(" "),s("p",[a._v("编写源程序: 在该程序中定义了名为HelloWorld的public类, 把程序保存在同名的文件中, 即 "),s("code",[a._v("HelloWorld.java")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"第二步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[a._v("#")]),a._v(" 第二步")]),a._v(" "),s("p",[a._v("将编写好的Java源程序进行编译, 生成字节码, 每个类的字节码会单独保存在一个文件中, 文件名是类名, 后缀为"),s("code",[a._v(".class")]),a._v(", 称为字节码文件."),s("br"),a._v("\n该步骤的命令:"),s("code",[a._v("javac HelloWorld.java")]),a._v(", "),s("code",[a._v("javac")]),a._v("是编译命令, 后面跟着"),s("code",[a._v("java源文件名")]),a._v(", 带"),s("code",[a._v(".java")]),a._v("后缀.\n如果编译不出现错误, 将得到一个名为"),s("code",[a._v("HelloWorld.class")]),a._v("的文件, 是类HelloWorld的字节码文件, 否则修改程序再编译, 直至编译成功.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("javac HelloWorld.java\n")])])]),s("h4",{attrs:{id:"第三步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[a._v("#")]),a._v(" 第三步")]),a._v(" "),s("p",[a._v("用Java虚拟机执行字节码."),s("br"),a._v("\n该步骤命令:"),s("code",[a._v("java HelloWorld")]),a._v(", "),s("code",[a._v("java")]),a._v("是执行字节码命令, 后面跟着主类名, 不带后缀, 不是HelloWorld.class字节码文件名.\n运行结果是在终端设备输出:"),s("code",[a._v("Hello,World!")])]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[a._v("注意:Java解释器后面跟随的HelloWorld是主类名！")])]),a._v(" "),s("p"),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("java HelloWorld\n")])])]),s("p",[a._v("当一个Java程序由若干个Java源文件组成时, 编译方法有如下几种:")]),a._v(" "),s("ul",[s("li",[a._v("javac后面跟源文件列表, 文件名之间用空格隔开. 如果源文件不是位于当前路径, 需要用全路径文件名;")]),a._v(" "),s("li",[a._v("将各个源文件放在一个目录下, 然后执行命令:"),s("code",[a._v("javac *.java")])])]),a._v(" "),s("p",[a._v("每个Java类编译完成后生成一个class文件, 文件名与类名相同, 后缀是"),s("code",[a._v(".class")]),a._v(". 当修改某个类时, 只需重新编译该类即可, 不必重新编译其它类.")]),a._v(" "),s("h3",{attrs:{id:"六、配置jdk环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、配置jdk环境变量"}},[a._v("#")]),a._v(" 六、配置JDK环境变量")]),a._v(" "),s("ul",[s("li",[a._v("JAVA_HOME: "),s("code",[a._v("C:\\ProgramFiles\\Java\\jdk-8.0.101")])]),a._v(" "),s("li",[a._v("PATH: "),s("code",[a._v("%JAVA_HOME%\\bin")])]),a._v(" "),s("li",[a._v("CLASS_HOME: "),s("code",[a._v(".;%JAVA_HOME%\\lib")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);