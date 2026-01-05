// 写真の詳細データ（モーダルで表示される内容）
const galleryData = {
    1: {
        title: "ゴールデンゲートブリッジ",
        image: "img/GoldenGateBridge_2.jpg",
        sections: [
            {
                type: "text",
                heading: "展示内容",
                text: "現地で見た展示では、橋がどのように建設されたのか、当時の技術や工夫について紹介されていました。\n強風や速い潮流、深い海底といった厳しい自然条件に対応するための工夫がされていることを学べました。"
            },
            {
                type: "text",
                heading: "IT専門学生としての学び",
                text: "IT分野においても、性能やセキュリティ、利用環境など様々な制約の中で最適な設計を行う必要があり、事前の設計や想定が重要であることを改めて感じました。"
            }
        ]
    },

    2: {
        title: "コンピュータの歴史",
        image: "img/ComputerHistoryMuseum_2.jpg",
        sections: [
            {
                type: "text",
                heading: "展示内容",
                text: "展示は英語で書かれており、スマホで翻訳しながら展示を見て回っていました。\n初期のコンピュータやタイプライターなど、実際に使われていた貴重な機器を間近で見ることができ、とても印象に残りました。"
            }
        ]
    },

    3: {
        title: "チップ文化",
        image: "img/dollar.jpg",
        sections: [
            {
                type: "text",
                heading: "体験談 - 後悔したこと",
                text: "アメリカでは、ホテルなどでチップを渡す文化があります。\n部屋に置いておけば受け取ってもらえると思い、全員分をまとめて枕元に置いていました。しかし、部屋がほぼそのままの状態でチップが受け取られておらずとても焦りました。\nチップは入ってすぐ目に入るテーブルなど、分かりやすい場所に置く必要があると知りました。"
            }
        ]
    },

    4: {
        title: "AUDODESKでの学び",
        image: "img/Autodesk.jpg",
        sections: [
            {
                type: "text",
                heading: "印象に残った展示",
                text: "険しい山道のような人が立ち入るのが難しい場所でも、無人で物資を運ぶことができるロボットが印象的でした。\n展示では実際にロボットが脚を動かしている様子を見ることができ、設計データやシミュレーションが現実の動きとして再現されていることに驚きました。"
            }
        ]
    },

    5: {
        title: "ヨセミテ国立公園",
        image: "img/BridalVeil.jpg",
        sections: [
            {
                type: "text",
                heading: "自然体験",
                text: "ヨセミテ国立公園では、ノースフェイスやブライダルヴェールなどの壮大な自然を実際に目にすることができました。音や空気、スケール感を含めて、体全体で自然を感じる貴重な体験となりました。"
            },
            {
                type: "text",
                heading: "文化的背景",
                text: "先住民であるインディアンの人々と自然との関わりについての話を聞き、自然が生活や文化と深く結びついてきた存在であることを知りました。"
            },
            {
                type: "text",
                heading: "ITとの関連",
                text: "自然をどのように残し守っていくかを考えることの重要性を感じました。IT技術は環境の監視や保全に活用されており、私たちIT系学生が自然と共存する社会を支える役割を担っていく必要があると感じました。"
            }
        ]
    },

    6: {
        title: "役に立ったもの・後悔",
        image: "img/kitchen.jpg",
        sections: [
            {
                type: "items",
                heading: "持っていけばよかったなと思ったもの",
                items: [
                    {
                        name: "スリッパ",
                        text: "アメリカでは基本的に土足文化で、宿泊先にもスリッパは用意されていませんでした。常に靴を履いている状態が続き、日本人としてはなかなか疲れが取れないと感じました。"
                    },
                    {
                        name: "食器類",
                        text: "夕食は自由時間になることが多く、簡単な食事をする機会がありました。皿などの食器がもう少しあると便利だったと思いました。"
                    }
                ]
            },
            {
                type: "list",
                heading: "活躍したもの（なんぼあってもいい）",
                list: [
                    "延長コード",
                    "絆創膏",
                    "ウェットティッシュ",
                    "ビニール袋",
                    "キッチンペーパー",
                    "タオル（割れ物を包める小さめのもの）"
                ]
            },
            {
                type: "list",
                heading: "同室のうち1人でも持ってくると神（要相談）",
                list: [
                    "小さいポット（インスタント味噌汁やカップ麺が部屋から出ずに食べられる！）"
                ]
            }
        ]
    },

    7: {
        title: "OTISでの学び",
        image: "img/OtisCollegeArts.jpg",
        sections: [
            {
                type: "text",
                heading: "体験の概要",
                text: "OTISで実際に授業を担当している教授や、休みの日にも関わらずサポートに来てくれた在校生の方々と一緒に、授業体験を行いました。"
            },
            {
                type: "text",
                heading: "授業について",
                text: "アイデア出しでは「体を動かしながら考えることが大切」という考えのもと、2人1組で早歩き（思ってる速さの2倍くらい）をしながら話し合いました。その後、5人ほどのグループで作品を制作しました。"
            },
            {
                type: "text",
                heading: "評価と交流",
                text: "完成した作品は壁に貼り出し、全員が赤いシールを使って「良いと思った作品」に投票しました。姉妹校の学生とも自然に会話が生まれ、交流を深めることができました。"
            },
            {
                type: "text",
                heading: "感じたことと学び",
                text: "正解を求めるのではなく、考えを形にし、人に伝えることを重視した授業がとても印象的でした。多様な価値観に触れながら学べたことで、より楽しく、刺激的な体験になりました。"
            }
        ]
    }

    // 追加するときはこれ
    // 6: {
    //   title: "写真のタイトル",
    //   image: "画像URL",
    //   description: "写真の詳細説明"
    // },
    // 7: {
    //   title: "別の写真のタイトル",
    //   image: "画像URL",
    //   description: "写真の詳細説明"
    // }
};

// モーダル操作
function openModal(itemId) {
    const item = galleryData[itemId];
    if (!item) return;

    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;

    modalDescription.innerHTML = "";

    // sections に統一
    item.sections.forEach(section => {

        // 見出し
        if (section.heading) {
            const h3 = document.createElement("h3");
            h3.textContent = section.heading;
            modalDescription.appendChild(h3);
        }

        // type: text
        if (section.type === "text") {
            const p = document.createElement("p");
            p.textContent = section.text;
            modalDescription.appendChild(p);
        }

        // type: items（名前＋説明）
        if (section.type === "items") {
            section.items.forEach(i => {
                const h4 = document.createElement("h4");
                h4.textContent = i.name;

                const p = document.createElement("p");
                p.textContent = i.text;

                modalDescription.appendChild(h4);
                modalDescription.appendChild(p);
            });
        }

        // type: list（箇条書き）
        if (section.type === "list") {
            const ul = document.createElement("ul");
            section.list.forEach(text => {
                const li = document.createElement("li");
                li.textContent = text;
                ul.appendChild(li);
            });
            modalDescription.appendChild(ul);
        }
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
