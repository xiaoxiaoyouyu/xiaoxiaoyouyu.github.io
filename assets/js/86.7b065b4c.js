(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{387:function(t,a,r){"use strict";r.r(a);var v=r(0),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"实验名称-进程管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验名称-进程管理"}},[t._v("#")]),t._v(" 实验名称：进程管理")]),t._v(" "),r("ul",[r("li",[t._v("实验学时：2学时")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"预习报告-2021-04-28"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预习报告-2021-04-28"}},[t._v("#")]),t._v(" 预习报告 2021-04-28")]),t._v(" "),r("h4",{attrs:{id:"实验原理摘要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验原理摘要"}},[t._v("#")]),t._v(" 实验原理摘要")]),t._v(" "),r("ul",[r("li",[t._v("系统调用是一种进入系统空间的办法，在OS的核心中都设置了一组用于实现各种系统功能的子程序，并将它们提供给程序员调用。程序员在需要OS提供某种服务的时候，便可以调用一条系统调用命令，去实现希望的功能，这就是系统调用。")]),t._v(" "),r("li",[t._v("在linux系统中，进程控制的功能是由内核的进程控制子系统实现的，并以系统调用的形式提供给用户进程或其他系统进程使用。")])]),t._v(" "),r("h4",{attrs:{id:"实验仪器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验仪器"}},[t._v("#")]),t._v(" 实验仪器")]),t._v(" "),r("ul",[r("li",[t._v("PC机")]),t._v(" "),r("li",[t._v("Linux (CentOS7)")])]),t._v(" "),r("h4",{attrs:{id:"实验内容及步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验内容及步骤"}},[t._v("#")]),t._v(" 实验内容及步骤")]),t._v(" "),r("ul",[r("li",[t._v("实验内容\n"),r("ul",[r("li",[t._v('编写一段程序，使用系统调用fork（）创建两个子进程。当此程序运行时，在系统中有一个父进程和两个子进程活动。让每个进程在屏幕上显示一个字符，父显示" parenter "，子进程分别显示“son”和“daughter”，观察记录显示结果，并分析原因')])])]),t._v(" "),r("li",[t._v("实验步骤\n"),r("ul",[r("li",[t._v("使用touch命令创建一个p.c文件")]),t._v(" "),r("li",[t._v("使用vi编辑p.c")]),t._v(" "),r("li",[t._v("编译文件 "),r("code",[t._v("gcc p.c -o p")])]),t._v(" "),r("li",[t._v("执行文件 "),r("code",[t._v("./p")])]),t._v(" "),r("li",[t._v("反复执行源文件，观察记录显示结果，并分析原因")])])])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"实验报告-2021-04-29"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验报告-2021-04-29"}},[t._v("#")]),t._v(" 实验报告 2021-04-29")]),t._v(" "),r("h4",{attrs:{id:"实验目的及要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验目的及要求"}},[t._v("#")]),t._v(" 实验目的及要求：")]),t._v(" "),r("ul",[r("li",[t._v("加深对进程概念的理解，明确进程和程序的区别与联系")]),t._v(" "),r("li",[t._v("进一步理解并发的概念，明确并发与顺序执行的异同")]),t._v(" "),r("li",[t._v("熟悉进程的创建、执行、阻塞、唤醒、终止等控制方法")])]),t._v(" "),r("h4",{attrs:{id:"实验环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[t._v("#")]),t._v(" 实验环境")]),t._v(" "),r("ul",[r("li",[t._v("PC机")]),t._v(" "),r("li",[t._v("VMware Workstation Pro 15.x")]),t._v(" "),r("li",[t._v("Linux (CentOS 7)")])]),t._v(" "),r("h4",{attrs:{id:"实验内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验内容"}},[t._v("#")]),t._v(" 实验内容")]),t._v(" "),r("ul",[r("li",[t._v('编写一段程序，使用系统调用fork()创建两个子进程。当此程序运行时，在系统中有一个父进程和两个子进程活动。让每个进程在屏幕上显示一个字符，父显示" parenter "，子进程分别显示“son ”和“daughter ”，观察记录显示结果，并分析原因。')])]),t._v(" "),r("h4",{attrs:{id:"实验步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验步骤"}},[t._v("#")]),t._v(" 实验步骤")]),t._v(" "),r("ul",[r("li",[t._v("打开终端在输入命令 "),r("code",[t._v("touch p.c")])]),t._v(" "),r("li",[t._v("在终端输入命令使用vi编辑 "),r("code",[t._v("vi p.c")])]),t._v(" "),r("li",[t._v("输入以下程序代码"),r("div",{staticClass:"language-c++ extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('#include<stdio.h>\n#include<unistd.h>\nint main(void){\n    int p1, p2;\n    while((p1 = fork()) == -1);\n    if(p1 == 0){\n        printf("Son ");\n    }else{\n        while((p2 = fork()) == -1);\n        if(p2 == 0){\n            printf("Daughter ");\n        }else{\n            printf("Parenter ");\n        }\n    }\n    printf("\\n");\n    return 0;\n}\n')])])])]),t._v(" "),r("li",[t._v("编译源文件 "),r("code",[t._v("gcc p.c -o p")])]),t._v(" "),r("li",[t._v("反复执行 "),r("code",[t._v("./p")])])]),t._v(" "),r("h4",{attrs:{id:"实验结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验结果"}},[t._v("#")]),t._v(" 实验结果")]),t._v(" "),r("ul",[r("li",[r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nightliuguoxing/Pic@main/image/os/1620525501118-OSOP101.jpg",alt:"执行结果"}})])]),t._v(" "),r("li",[r("p",[t._v('观察反复执行后的输出结果, 我们可以发现程序运行结果有的是: "Parenter Son Daughter", 有的是"Parenter Daughter Son", 结果有多种可能性。')])]),t._v(" "),r("li",[r("p",[t._v("自己本身的C语言程序是没有问题的，但是为什么会有多种输出结果？")]),t._v(" "),r("ul",[r("li",[t._v('对于父进程来说，除了创建两个子进程之外，还要输出"Parenter"，于是父进程和子进程需要竞争CPU用来输出字符串"Parenter"，但是CPU当前调用什么进程，就会执行什么进程。输出结果为"Parenter Son Daughter"的意思是：先运行父进程，并输出，然后子进程被创建，成为就绪队列，父进程可以运行，继续创建第二个子进程。就程序的并发性来看，是有多种输出结果的，父进程和子进程没有同步措施，因此父进程与子进程的输出内容会叠加在一起，所以父进程和子进程的输出结果是随机的。')]),t._v(" "),r("li",[t._v("对于子进程来说，因为在有三个进程时，不同的操作系统的调度算法不一样，因此也有其他的输出顺序。")]),t._v(" "),r("li",[t._v("对于Printf()函数来说，他在输出字符串的过程中不会被中断，因此，字符串内部字符顺序输出不变。但是由于进程并发运行的调度顺序和父子进程抢占CPU的问题，输出字符串的顺序和先后随着执行的不同而发生变化。")])])])]),t._v(" "),r("h4",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("ul",[r("li",[t._v("通过这次上机实验，我们了解并掌握了如何在Linux操作系统下编辑、编译和运行C语言文件。")]),t._v(" "),r("li",[t._v("对于它的执行过程和整体的结构有一定的了解")])])])}),[],!1,null,null,null);a.default=_.exports}}]);