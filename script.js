/* ============================================
   LinguaVerse — Interactive Script
   Flashcards · Translation · Animations
   ============================================ */

// ========== Flashcard Data ==========
const flashcardData = {
    zh: {
        daily: [
            { word: '你好', pinyin: 'nǐ hǎo', meaning: 'Xin chào', example: '你好，很高兴认识你。', exMeaning: 'Xin chào, rất vui được gặp bạn.' },
            { word: '谢谢', pinyin: 'xiè xiè', meaning: 'Cảm ơn', example: '谢谢你的帮助。', exMeaning: 'Cảm ơn sự giúp đỡ của bạn.' },
            { word: '对不起', pinyin: 'duì bù qǐ', meaning: 'Xin lỗi', example: '对不起，我来晚了。', exMeaning: 'Xin lỗi, tôi đến muộn.' },
            { word: '早上好', pinyin: 'zǎo shàng hǎo', meaning: 'Chào buổi sáng', example: '早上好！今天天气真好。', exMeaning: 'Chào buổi sáng! Hôm nay thời tiết thật đẹp.' },
            { word: '再见', pinyin: 'zài jiàn', meaning: 'Tạm biệt', example: '再见！明天见！', exMeaning: 'Tạm biệt! Ngày mai gặp lại!' },
            { word: '请', pinyin: 'qǐng', meaning: 'Xin vui lòng', example: '请坐。', exMeaning: 'Xin mời ngồi.' },
            { word: '没关系', pinyin: 'méi guān xi', meaning: 'Không sao', example: '没关系，别担心。', exMeaning: 'Không sao, đừng lo lắng.' },
            { word: '是的', pinyin: 'shì de', meaning: 'Vâng / Đúng vậy', example: '是的，我同意。', exMeaning: 'Vâng, tôi đồng ý.' },
        ],
        travel: [
            { word: '机场', pinyin: 'jī chǎng', meaning: 'Sân bay', example: '请送我到机场。', exMeaning: 'Xin đưa tôi đến sân bay.' },
            { word: '酒店', pinyin: 'jiǔ diàn', meaning: 'Khách sạn', example: '这个酒店很好。', exMeaning: 'Khách sạn này rất tốt.' },
            { word: '护照', pinyin: 'hù zhào', meaning: 'Hộ chiếu', example: '请出示你的护照。', exMeaning: 'Xin xuất trình hộ chiếu của bạn.' },
            { word: '出租车', pinyin: 'chū zū chē', meaning: 'Taxi', example: '我要打一辆出租车。', exMeaning: 'Tôi muốn gọi một chiếc taxi.' },
            { word: '地图', pinyin: 'dì tú', meaning: 'Bản đồ', example: '你有地图吗？', exMeaning: 'Bạn có bản đồ không?' },
            { word: '火车站', pinyin: 'huǒ chē zhàn', meaning: 'Ga tàu', example: '火车站在哪里？', exMeaning: 'Ga tàu ở đâu?' },
            { word: '旅游', pinyin: 'lǚ yóu', meaning: 'Du lịch', example: '我喜欢旅游。', exMeaning: 'Tôi thích du lịch.' },
            { word: '签证', pinyin: 'qiān zhèng', meaning: 'Thị thực', example: '我需要办签证。', exMeaning: 'Tôi cần làm thị thực.' },
        ],
        business: [
            { word: '公司', pinyin: 'gōng sī', meaning: 'Công ty', example: '这是我们的公司。', exMeaning: 'Đây là công ty của chúng tôi.' },
            { word: '会议', pinyin: 'huì yì', meaning: 'Cuộc họp', example: '会议几点开始？', exMeaning: 'Cuộc họp mấy giờ bắt đầu?' },
            { word: '合同', pinyin: 'hé tóng', meaning: 'Hợp đồng', example: '请签这份合同。', exMeaning: 'Xin ký hợp đồng này.' },
            { word: '工作', pinyin: 'gōng zuò', meaning: 'Công việc', example: '你的工作是什么？', exMeaning: 'Công việc của bạn là gì?' },
            { word: '经理', pinyin: 'jīng lǐ', meaning: 'Giám đốc', example: '我是这里的经理。', exMeaning: 'Tôi là giám đốc ở đây.' },
            { word: '客户', pinyin: 'kè hù', meaning: 'Khách hàng', example: '客户很满意。', exMeaning: 'Khách hàng rất hài lòng.' },
            { word: '报告', pinyin: 'bào gào', meaning: 'Báo cáo', example: '请准备一份报告。', exMeaning: 'Xin chuẩn bị một bản báo cáo.' },
            { word: '办公室', pinyin: 'bàn gōng shì', meaning: 'Văn phòng', example: '办公室在三楼。', exMeaning: 'Văn phòng ở tầng ba.' },
        ],
        food: [
            { word: '米饭', pinyin: 'mǐ fàn', meaning: 'Cơm', example: '我要一碗米饭。', exMeaning: 'Tôi muốn một bát cơm.' },
            { word: '面条', pinyin: 'miàn tiáo', meaning: 'Mì', example: '这碗面条很好吃。', exMeaning: 'Bát mì này rất ngon.' },
            { word: '饺子', pinyin: 'jiǎo zi', meaning: 'Sủi cảo', example: '我喜欢吃饺子。', exMeaning: 'Tôi thích ăn sủi cảo.' },
            { word: '茶', pinyin: 'chá', meaning: 'Trà', example: '请给我一杯茶。', exMeaning: 'Xin cho tôi một ly trà.' },
            { word: '啤酒', pinyin: 'pí jiǔ', meaning: 'Bia', example: '来一杯啤酒。', exMeaning: 'Cho một ly bia.' },
            { word: '好吃', pinyin: 'hǎo chī', meaning: 'Ngon', example: '这个菜真好吃！', exMeaning: 'Món này thật ngon!' },
            { word: '筷子', pinyin: 'kuài zi', meaning: 'Đũa', example: '你会用筷子吗？', exMeaning: 'Bạn biết dùng đũa không?' },
            { word: '服务员', pinyin: 'fú wù yuán', meaning: 'Phục vụ', example: '服务员，买单。', exMeaning: 'Phục vụ ơi, tính tiền.' },
        ],
        greeting: [
            { word: '你好吗', pinyin: 'nǐ hǎo ma', meaning: 'Bạn khỏe không', example: '你好吗？我很好。', exMeaning: 'Bạn khỏe không? Tôi rất khỏe.' },
            { word: '大家好', pinyin: 'dà jiā hǎo', meaning: 'Chào mọi người', example: '大家好，欢迎来到这里。', exMeaning: 'Chào mọi người, chào mừng đến đây.' },
            { word: '晚上好', pinyin: 'wǎn shàng hǎo', meaning: 'Chào buổi tối', example: '晚上好！吃了吗？', exMeaning: 'Chào buổi tối! Ăn chưa?' },
            { word: '晚安', pinyin: 'wǎn ān', meaning: 'Chúc ngủ ngon', example: '晚安，做个好梦。', exMeaning: 'Chúc ngủ ngon, mơ đẹp nhé.' },
            { word: '生日快乐', pinyin: 'shēng rì kuài lè', meaning: 'Chúc mừng sinh nhật', example: '生日快乐！送你个礼物。', exMeaning: 'Chúc mừng sinh nhật! Tặng bạn một món quà.' },
            { word: '新年快乐', pinyin: 'xīn nián kuài lè', meaning: 'Chúc mừng năm mới', example: '新年快乐！恭喜发财！', exMeaning: 'Chúc mừng năm mới! Chúc phát tài!' },
            { word: '欢迎', pinyin: 'huān yíng', meaning: 'Chào mừng', example: '欢迎光临！', exMeaning: 'Chào mừng quý khách!' },
            { word: '认识你很高兴', pinyin: 'rèn shí nǐ hěn gāo xìng', meaning: 'Rất vui được gặp bạn', example: '认识你很高兴，我叫小明。', exMeaning: 'Rất vui được gặp bạn, tôi tên là Tiểu Minh.' },
        ],
    },
    en: {
        daily: [
            { word: 'Hello', pinyin: '/həˈloʊ/', meaning: 'Xin chào', example: 'Hello, how are you?', exMeaning: 'Xin chào, bạn khỏe không?' },
            { word: 'Thank you', pinyin: '/θæŋk juː/', meaning: 'Cảm ơn', example: 'Thank you for your help.', exMeaning: 'Cảm ơn sự giúp đỡ của bạn.' },
            { word: 'Sorry', pinyin: '/ˈsɒri/', meaning: 'Xin lỗi', example: "I'm sorry for being late.", exMeaning: 'Tôi xin lỗi vì đến muộn.' },
            { word: 'Goodbye', pinyin: '/ˌɡʊdˈbaɪ/', meaning: 'Tạm biệt', example: 'Goodbye! See you tomorrow!', exMeaning: 'Tạm biệt! Hẹn gặp ngày mai!' },
            { word: 'Please', pinyin: '/pliːz/', meaning: 'Vui lòng', example: 'Please sit down.', exMeaning: 'Xin mời ngồi.' },
            { word: 'Excuse me', pinyin: '/ɪkˈskjuːz mi/', meaning: 'Xin phép', example: 'Excuse me, where is the restroom?', exMeaning: 'Xin phép, nhà vệ sinh ở đâu?' },
            { word: 'Welcome', pinyin: '/ˈwelkəm/', meaning: 'Chào mừng', example: 'Welcome to our home!', exMeaning: 'Chào mừng đến nhà chúng tôi!' },
            { word: 'Congratulations', pinyin: '/kənˌɡrætʃuˈleɪʃnz/', meaning: 'Chúc mừng', example: 'Congratulations on your success!', exMeaning: 'Chúc mừng thành công của bạn!' },
        ],
        travel: [
            { word: 'Airport', pinyin: '/ˈeəpɔːrt/', meaning: 'Sân bay', example: 'The airport is 30 minutes away.', exMeaning: 'Sân bay cách đây 30 phút.' },
            { word: 'Hotel', pinyin: '/hoʊˈtel/', meaning: 'Khách sạn', example: 'I booked a hotel room.', exMeaning: 'Tôi đã đặt phòng khách sạn.' },
            { word: 'Passport', pinyin: '/ˈpæspɔːrt/', meaning: 'Hộ chiếu', example: 'Please show your passport.', exMeaning: 'Xin xuất trình hộ chiếu.' },
            { word: 'Luggage', pinyin: '/ˈlʌɡɪdʒ/', meaning: 'Hành lý', example: 'Where is my luggage?', exMeaning: 'Hành lý của tôi ở đâu?' },
            { word: 'Tourist', pinyin: '/ˈtʊrɪst/', meaning: 'Khách du lịch', example: 'I am a tourist.', exMeaning: 'Tôi là khách du lịch.' },
            { word: 'Reservation', pinyin: '/ˌrezərˈveɪʃn/', meaning: 'Đặt chỗ', example: 'I have a reservation.', exMeaning: 'Tôi có đặt chỗ trước.' },
            { word: 'Direction', pinyin: '/dɪˈrekʃn/', meaning: 'Hướng dẫn', example: 'Can you give me directions?', exMeaning: 'Bạn có thể chỉ đường cho tôi không?' },
            { word: 'Souvenir', pinyin: '/ˌsuːvəˈnɪr/', meaning: 'Quà lưu niệm', example: 'I want to buy souvenirs.', exMeaning: 'Tôi muốn mua quà lưu niệm.' },
        ],
        business: [
            { word: 'Meeting', pinyin: '/ˈmiːtɪŋ/', meaning: 'Cuộc họp', example: 'The meeting starts at 9 AM.', exMeaning: 'Cuộc họp bắt đầu lúc 9 giờ sáng.' },
            { word: 'Contract', pinyin: '/ˈkɑːntrækt/', meaning: 'Hợp đồng', example: 'Please sign the contract.', exMeaning: 'Xin ký hợp đồng.' },
            { word: 'Manager', pinyin: '/ˈmænɪdʒər/', meaning: 'Quản lý', example: 'She is the project manager.', exMeaning: 'Cô ấy là quản lý dự án.' },
            { word: 'Deadline', pinyin: '/ˈdedlaɪn/', meaning: 'Hạn chót', example: 'The deadline is next Friday.', exMeaning: 'Hạn chót là thứ Sáu tuần sau.' },
            { word: 'Report', pinyin: '/rɪˈpɔːrt/', meaning: 'Báo cáo', example: 'Please submit the report.', exMeaning: 'Xin nộp báo cáo.' },
            { word: 'Colleague', pinyin: '/ˈkɑːliːɡ/', meaning: 'Đồng nghiệp', example: "She's my colleague.", exMeaning: 'Cô ấy là đồng nghiệp của tôi.' },
            { word: 'Salary', pinyin: '/ˈsæləri/', meaning: 'Lương', example: 'The salary is competitive.', exMeaning: 'Mức lương rất cạnh tranh.' },
            { word: 'Interview', pinyin: '/ˈɪntərvjuː/', meaning: 'Phỏng vấn', example: 'I have an interview tomorrow.', exMeaning: 'Tôi có buổi phỏng vấn ngày mai.' },
        ],
        food: [
            { word: 'Restaurant', pinyin: '/ˈrestərɑːnt/', meaning: 'Nhà hàng', example: "Let's go to a restaurant.", exMeaning: 'Chúng ta đi nhà hàng nhé.' },
            { word: 'Delicious', pinyin: '/dɪˈlɪʃəs/', meaning: 'Ngon', example: 'This food is delicious!', exMeaning: 'Món ăn này ngon!' },
            { word: 'Menu', pinyin: '/ˈmenjuː/', meaning: 'Thực đơn', example: 'Can I see the menu?', exMeaning: 'Cho tôi xem thực đơn được không?' },
            { word: 'Breakfast', pinyin: '/ˈbrekfəst/', meaning: 'Bữa sáng', example: 'What do you have for breakfast?', exMeaning: 'Bạn ăn gì cho bữa sáng?' },
            { word: 'Dessert', pinyin: '/dɪˈzɜːrt/', meaning: 'Tráng miệng', example: "I'd like a dessert, please.", exMeaning: 'Cho tôi một món tráng miệng.' },
            { word: 'Recipe', pinyin: '/ˈresɪpi/', meaning: 'Công thức', example: 'Can you share the recipe?', exMeaning: 'Bạn có thể chia sẻ công thức không?' },
            { word: 'Beverage', pinyin: '/ˈbevərɪdʒ/', meaning: 'Đồ uống', example: 'What beverage would you like?', exMeaning: 'Bạn muốn dùng đồ uống gì?' },
            { word: 'Appetizer', pinyin: '/ˈæpɪtaɪzər/', meaning: 'Món khai vị', example: "We'll start with an appetizer.", exMeaning: 'Chúng ta sẽ bắt đầu bằng món khai vị.' },
        ],
        greeting: [
            { word: 'How are you?', pinyin: '/haʊ ɑːr juː/', meaning: 'Bạn khỏe không?', example: "Hi! How are you doing?", exMeaning: 'Chào! Bạn có khỏe không?' },
            { word: 'Nice to meet you', pinyin: '/naɪs tuː miːt juː/', meaning: 'Rất vui gặp bạn', example: "Nice to meet you. I'm John.", exMeaning: 'Rất vui gặp bạn. Tôi là John.' },
            { word: 'Good morning', pinyin: '/ɡʊd ˈmɔːrnɪŋ/', meaning: 'Chào buổi sáng', example: 'Good morning! Beautiful day!', exMeaning: 'Chào buổi sáng! Ngày đẹp quá!' },
            { word: 'Good night', pinyin: '/ɡʊd naɪt/', meaning: 'Chúc ngủ ngon', example: 'Good night! Sleep well.', exMeaning: 'Chúc ngủ ngon! Ngủ ngon nhé.' },
            { word: 'See you later', pinyin: '/siː juː ˈleɪtər/', meaning: 'Hẹn gặp lại', example: "See you later! Take care!", exMeaning: 'Hẹn gặp lại! Bảo trọng!' },
            { word: 'Take care', pinyin: '/teɪk keər/', meaning: 'Bảo trọng', example: 'Take care of yourself.', exMeaning: 'Bảo trọng nhé.' },
            { word: "What's up?", pinyin: '/wɒts ʌp/', meaning: 'Có gì mới không?', example: "Hey! What's up?", exMeaning: 'Này! Có gì mới không?' },
            { word: 'Long time no see', pinyin: '/lɒŋ taɪm noʊ siː/', meaning: 'Lâu rồi không gặp', example: 'Long time no see! How have you been?', exMeaning: 'Lâu rồi không gặp! Dạo này bạn sao rồi?' },
        ],
    },
    ja: {
        daily: [
            { word: 'こんにちは', pinyin: 'Konnichiwa', meaning: 'Xin chào', example: 'こんにちは、元気ですか？', exMeaning: 'Xin chào, bạn khỏe không?' },
            { word: 'ありがとう', pinyin: 'Arigatou', meaning: 'Cảm ơn', example: 'ありがとうございます。', exMeaning: 'Xin cảm ơn (lịch sự).' },
            { word: 'すみません', pinyin: 'Sumimasen', meaning: 'Xin lỗi / Xin phép', example: 'すみません、道を教えてください。', exMeaning: 'Xin lỗi, xin hãy chỉ đường cho tôi.' },
            { word: 'おはよう', pinyin: 'Ohayou', meaning: 'Chào buổi sáng', example: 'おはようございます！', exMeaning: 'Chào buổi sáng! (lịch sự)' },
            { word: 'さようなら', pinyin: 'Sayounara', meaning: 'Tạm biệt', example: 'さようなら、また明日。', exMeaning: 'Tạm biệt, hẹn ngày mai.' },
            { word: 'お願いします', pinyin: 'Onegaishimasu', meaning: 'Xin vui lòng', example: 'これをお願いします。', exMeaning: 'Xin cho tôi cái này.' },
            { word: 'はい', pinyin: 'Hai', meaning: 'Vâng / Đúng', example: 'はい、わかりました。', exMeaning: 'Vâng, tôi hiểu rồi.' },
            { word: 'いいえ', pinyin: 'Iie', meaning: 'Không', example: 'いいえ、大丈夫です。', exMeaning: 'Không, không sao đâu.' },
        ],
        travel: [
            { word: '空港', pinyin: 'Kuukou', meaning: 'Sân bay', example: '空港まで行きたいです。', exMeaning: 'Tôi muốn đến sân bay.' },
            { word: 'ホテル', pinyin: 'Hoteru', meaning: 'Khách sạn', example: 'ホテルはどこですか？', exMeaning: 'Khách sạn ở đâu?' },
            { word: '電車', pinyin: 'Densha', meaning: 'Tàu điện', example: '電車で行きましょう。', exMeaning: 'Chúng ta đi bằng tàu điện nhé.' },
            { word: '切符', pinyin: 'Kippu', meaning: 'Vé', example: '切符を二枚ください。', exMeaning: 'Cho tôi hai vé.' },
            { word: '地図', pinyin: 'Chizu', meaning: 'Bản đồ', example: '地図を見せてください。', exMeaning: 'Xin cho xem bản đồ.' },
            { word: '観光', pinyin: 'Kankou', meaning: 'Tham quan', example: '観光を楽しんでいます。', exMeaning: 'Tôi đang tận hưởng việc tham quan.' },
            { word: '温泉', pinyin: 'Onsen', meaning: 'Suối nước nóng', example: '温泉に入りたいです。', exMeaning: 'Tôi muốn tắm suối nước nóng.' },
            { word: '写真', pinyin: 'Shashin', meaning: 'Ảnh / Chụp ảnh', example: '写真を撮ってもいいですか？', exMeaning: 'Tôi có thể chụp ảnh được không?' },
        ],
        business: [
            { word: '会社', pinyin: 'Kaisha', meaning: 'Công ty', example: '会社は東京にあります。', exMeaning: 'Công ty ở Tokyo.' },
            { word: '会議', pinyin: 'Kaigi', meaning: 'Cuộc họp', example: '会議は三時からです。', exMeaning: 'Cuộc họp bắt đầu từ 3 giờ.' },
            { word: '名刺', pinyin: 'Meishi', meaning: 'Danh thiếp', example: '名刺をいただけますか？', exMeaning: 'Tôi có thể xin danh thiếp được không?' },
            { word: '仕事', pinyin: 'Shigoto', meaning: 'Công việc', example: '仕事は何ですか？', exMeaning: 'Công việc của bạn là gì?' },
            { word: '社長', pinyin: 'Shachou', meaning: 'Giám đốc', example: '社長にお会いしたいです。', exMeaning: 'Tôi muốn gặp giám đốc.' },
            { word: '契約', pinyin: 'Keiyaku', meaning: 'Hợp đồng', example: '契約書にサインしてください。', exMeaning: 'Xin ký vào hợp đồng.' },
            { word: '出張', pinyin: 'Shutchou', meaning: 'Công tác', example: '来週、出張があります。', exMeaning: 'Tuần sau tôi có chuyến công tác.' },
            { word: '残業', pinyin: 'Zangyou', meaning: 'Làm thêm giờ', example: '今日は残業です。', exMeaning: 'Hôm nay phải làm thêm giờ.' },
        ],
        food: [
            { word: 'ラーメン', pinyin: 'Raamen', meaning: 'Mì ramen', example: 'ラーメンが食べたい。', exMeaning: 'Tôi muốn ăn mì ramen.' },
            { word: '寿司', pinyin: 'Sushi', meaning: 'Sushi', example: '寿司は新鮮です。', exMeaning: 'Sushi rất tươi.' },
            { word: '天ぷら', pinyin: 'Tempura', meaning: 'Tempura', example: '天ぷらを注文しました。', exMeaning: 'Tôi đã gọi tempura.' },
            { word: 'お茶', pinyin: 'Ocha', meaning: 'Trà', example: 'お茶をどうぞ。', exMeaning: 'Mời dùng trà.' },
            { word: '美味しい', pinyin: 'Oishii', meaning: 'Ngon', example: 'この料理は美味しいです！', exMeaning: 'Món ăn này ngon quá!' },
            { word: 'いただきます', pinyin: 'Itadakimasu', meaning: 'Xin phép được ăn', example: 'いただきます！', exMeaning: 'Xin phép được ăn! (nói trước bữa ăn)' },
            { word: 'おにぎり', pinyin: 'Onigiri', meaning: 'Cơm nắm', example: 'おにぎりを買いました。', exMeaning: 'Tôi đã mua cơm nắm.' },
            { word: '刺身', pinyin: 'Sashimi', meaning: 'Sashimi', example: '刺身が大好きです。', exMeaning: 'Tôi rất thích sashimi.' },
        ],
        greeting: [
            { word: 'お元気ですか', pinyin: 'Ogenkidesuka', meaning: 'Bạn khỏe không?', example: 'お元気ですか？元気です。', exMeaning: 'Bạn khỏe không? Tôi khỏe.' },
            { word: 'はじめまして', pinyin: 'Hajimemashite', meaning: 'Rất vui gặp bạn', example: 'はじめまして、田中です。', exMeaning: 'Rất vui gặp bạn, tôi là Tanaka.' },
            { word: 'こんばんは', pinyin: 'Konbanwa', meaning: 'Chào buổi tối', example: 'こんばんは！お疲れ様です。', exMeaning: 'Chào buổi tối! Bạn vất vả rồi.' },
            { word: 'おやすみなさい', pinyin: 'Oyasuminasai', meaning: 'Chúc ngủ ngon', example: 'おやすみなさい、良い夢を。', exMeaning: 'Chúc ngủ ngon, mơ đẹp nhé.' },
            { word: 'またね', pinyin: 'Matane', meaning: 'Hẹn gặp lại', example: 'またね！気をつけて。', exMeaning: 'Hẹn gặp lại! Cẩn thận nhé.' },
            { word: 'いらっしゃいませ', pinyin: 'Irasshaimase', meaning: 'Chào mừng quý khách', example: 'いらっしゃいませ！何名様ですか？', exMeaning: 'Chào mừng quý khách! Mấy người ạ?' },
            { word: 'お誕生日おめでとう', pinyin: 'Otanjoubi omedetou', meaning: 'Chúc mừng sinh nhật', example: 'お誕生日おめでとうございます！', exMeaning: 'Chúc mừng sinh nhật! (lịch sự)' },
            { word: 'よろしくお願いします', pinyin: 'Yoroshiku onegaishimasu', meaning: 'Xin hãy giúp đỡ', example: 'よろしくお願いします。', exMeaning: 'Xin hãy giúp đỡ / Rất hân hạnh.' },
        ],
    },
};

// ========== State ==========
let currentLang = 'zh';
let currentCategory = 'daily';
let currentCardIndex = 0;
let learnedCount = 0;

// ========== DOM Elements ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initParticles();
    initNavigation();
    initTheme();
    initScrollReveal();
    initFlashcards();
    initTranslator();
    initParallax();
    initStatsAnimation();
    initLearningPath();
    initMobileMenu();
});

// ========== Preloader ==========
function initPreloader() {
    const preloader = $('#preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 2500);
    });
    // Fallback: hide after 4s even if load event doesn't fire
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 4000);
}

// ========== Particles ==========
function initParticles() {
    const canvas = $('#particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor(window.innerWidth / 15), 80);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.1,
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
            ctx.fill();
            
            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 99, 255, ${0.05 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });
        
        animationId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

// ========== Navigation ==========
function initNavigation() {
    const nav = $('#mainNav');
    const links = $$('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active link
        const sections = ['home', 'features', 'flashcards', 'translator', 'ecosystem'];
        let current = '';
        
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom > 150) {
                    current = id;
                }
            }
        });
        
        if (current) {
            links.forEach((link) => {
                link.classList.remove('active');
                if (link.dataset.section === current) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========== Theme Toggle ==========
function initTheme() {
    const toggle = $('#themeToggle');
    const saved = localStorage.getItem('linguaverse-theme');
    
    if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('linguaverse-theme', next);
        });
    }
}

// ========== Scroll Reveal ==========
function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    $$('.reveal-up').forEach((el) => observer.observe(el));
}

// ========== Flashcards ==========
function initFlashcards() {
    const flashcard = $('#mainFlashcard');
    const prevBtn = $('#prevCard');
    const nextBtn = $('#nextCard');
    const langBtns = $$('.lang-btn');
    const catTabs = $$('.cat-tab');
    const diffBtns = $$('.diff-btn');
    const speakFront = $('#speakFront');
    const speakBack = $('#speakBack');
    
    // Flip card
    if (flashcard) {
        flashcard.addEventListener('click', (e) => {
            if (e.target.closest('.card-speak')) return;
            flashcard.classList.toggle('flipped');
        });
    }
    
    // Navigation
    if (prevBtn) prevBtn.addEventListener('click', () => navigateCard(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateCard(1));
    
    // Language selection
    langBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            langBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            currentCardIndex = 0;
            learnedCount = 0;
            updateCard();
        });
    });
    
    // Category selection
    catTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            catTabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            currentCardIndex = 0;
            learnedCount = 0;
            updateCard();
        });
    });
    
    // Difficulty buttons
    diffBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const diff = btn.dataset.diff;
            if (diff === 'known' || diff === 'easy') {
                learnedCount++;
            }
            // Add ripple effect
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = ''; }, 150);
            
            navigateCard(1);
            updateProgress();
        });
    });
    
    // Speak buttons
    if (speakFront) {
        speakFront.addEventListener('click', (e) => {
            e.stopPropagation();
            const cards = getCurrentCards();
            const card = cards[currentCardIndex];
            speak(card.word, currentLang);
        });
    }
    
    if (speakBack) {
        speakBack.addEventListener('click', (e) => {
            e.stopPropagation();
            const cards = getCurrentCards();
            const card = cards[currentCardIndex];
            speak(card.meaning, 'vi');
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        if (e.key === 'ArrowLeft') navigateCard(-1);
        if (e.key === 'ArrowRight') navigateCard(1);
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (flashcard) flashcard.classList.toggle('flipped');
        }
    });
    
    updateCard();
}

function getCurrentCards() {
    return flashcardData[currentLang]?.[currentCategory] || flashcardData[currentLang]?.daily || [];
}

function navigateCard(direction) {
    const cards = getCurrentCards();
    const flashcard = $('#mainFlashcard');
    
    if (flashcard) flashcard.classList.remove('flipped');
    
    currentCardIndex += direction;
    if (currentCardIndex >= cards.length) currentCardIndex = 0;
    if (currentCardIndex < 0) currentCardIndex = cards.length - 1;
    
    // Animate transition
    const container = $('#flashcardContainer');
    if (container) {
        container.style.transform = `translateX(${direction * 20}px)`;
        container.style.opacity = '0';
        
        setTimeout(() => {
            updateCard();
            container.style.transform = `translateX(${-direction * 20}px)`;
            
            requestAnimationFrame(() => {
                container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                container.style.transform = 'translateX(0)';
                container.style.opacity = '1';
                
                setTimeout(() => {
                    container.style.transition = '';
                }, 400);
            });
        }, 200);
    } else {
        updateCard();
    }
}

function updateCard() {
    const cards = getCurrentCards();
    if (cards.length === 0) return;
    
    const card = cards[currentCardIndex];
    
    const wordEl = $('#cardWord');
    const pinyinEl = $('#cardPinyin');
    const meaningEl = $('#cardMeaning');
    const exampleEl = $('#cardExample');
    const exampleMeaningEl = $('#cardExampleMeaning');
    const langBadge = $('#cardLangBadge');
    const indexEl = $('#currentIndex');
    const totalEl = $('#totalCards');
    
    if (wordEl) {
        wordEl.textContent = card.word;
        // Set appropriate font
        if (currentLang === 'zh') {
            wordEl.style.fontFamily = "'Noto Sans SC', sans-serif";
        } else if (currentLang === 'ja') {
            wordEl.style.fontFamily = "'Noto Sans JP', sans-serif";
        } else {
            wordEl.style.fontFamily = "'Inter', sans-serif";
        }
    }
    if (pinyinEl) pinyinEl.textContent = card.pinyin;
    if (meaningEl) meaningEl.textContent = card.meaning;
    if (exampleEl) exampleEl.innerHTML = `<strong>Ví dụ:</strong> ${card.example}`;
    if (exampleMeaningEl) exampleMeaningEl.textContent = card.exMeaning;
    if (langBadge) {
        const labels = { zh: '中文', en: 'ENG', ja: '日本語' };
        langBadge.textContent = labels[currentLang] || currentLang;
    }
    if (indexEl) indexEl.textContent = currentCardIndex + 1;
    if (totalEl) totalEl.textContent = cards.length;
    
    updateProgress();
}

function updateProgress() {
    const cards = getCurrentCards();
    const fill = $('#progressFill');
    const learnedEl = $('#learnedCount');
    const remainingEl = $('#remainingCount');
    
    const progress = cards.length > 0 ? ((currentCardIndex + 1) / cards.length) * 100 : 0;
    
    if (fill) fill.style.width = `${progress}%`;
    if (learnedEl) learnedEl.textContent = learnedCount;
    if (remainingEl) remainingEl.textContent = Math.max(0, cards.length - learnedCount);
}

// ========== Text-to-Speech ==========
function speak(text, lang) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        const langMap = {
            zh: 'zh-CN',
            en: 'en-US',
            ja: 'ja-JP',
            vi: 'vi-VN',
        };
        
        utterance.lang = langMap[lang] || lang;
        utterance.rate = 0.85;
        utterance.pitch = 1;
        
        window.speechSynthesis.speak(utterance);
    }
}

// ========== Translator ==========
function initTranslator() {
    const sourceText = $('#sourceText');
    const targetText = $('#targetText');
    const translateBtn = $('#translateBtn');
    const swapBtn = $('#swapLangs');
    const sourceLang = $('#sourceLang');
    const targetLang = $('#targetLang');
    const speakSource = $('#speakSource');
    const speakTarget = $('#speakTarget');
    const copySource = $('#copySource');
    const copyTarget = $('#copyTarget');
    const charCount = $('#charCount');
    
    // Character count
    if (sourceText && charCount) {
        sourceText.addEventListener('input', () => {
            charCount.textContent = `${sourceText.value.length} / 5000`;
        });
    }
    
    // Translate
    if (translateBtn) {
        translateBtn.addEventListener('click', () => {
            translateText();
        });
    }
    
    // Auto-translate on Enter
    if (sourceText) {
        sourceText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                translateText();
            }
        });
    }
    
    // Swap languages
    if (swapBtn) {
        swapBtn.addEventListener('click', () => {
            const tempLang = sourceLang.value;
            sourceLang.value = targetLang.value;
            targetLang.value = tempLang;
            
            const tempText = sourceText.value;
            sourceText.value = targetText.textContent !== 'Bản dịch sẽ xuất hiện ở đây...' ? targetText.textContent : '';
            
            if (tempText) {
                translateText();
            }
        });
    }
    
    // Speak
    if (speakSource) {
        speakSource.addEventListener('click', () => {
            if (sourceText.value) speak(sourceText.value, sourceLang.value);
        });
    }
    
    if (speakTarget) {
        speakTarget.addEventListener('click', () => {
            const text = targetText.textContent;
            if (text && text !== 'Bản dịch sẽ xuất hiện ở đây...') {
                speak(text, targetLang.value);
            }
        });
    }
    
    // Copy
    if (copySource) {
        copySource.addEventListener('click', () => {
            copyToClipboard(sourceText.value);
        });
    }
    
    if (copyTarget) {
        copyTarget.addEventListener('click', () => {
            const text = targetText.textContent;
            if (text && text !== 'Bản dịch sẽ xuất hiện ở đây...') {
                copyToClipboard(text);
            }
        });
    }
}

async function translateText() {
    const sourceText = $('#sourceText');
    const targetText = $('#targetText');
    const sourceLang = $('#sourceLang');
    const targetLang = $('#targetLang');
    const translateBtn = $('#translateBtn');
    
    if (!sourceText.value.trim()) {
        targetText.innerHTML = '<span class="placeholder-text">Vui lòng nhập văn bản cần dịch...</span>';
        return;
    }
    
    // Loading state
    translateBtn.disabled = true;
    targetText.innerHTML = '<span class="placeholder-text">Đang dịch...</span>';
    
    try {
        // Using MyMemory Translation API (free, no API key required)
        const langPair = `${sourceLang.value}|${targetLang.value}`;
        const encodedText = encodeURIComponent(sourceText.value.trim());
        
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${langPair}`
        );
        
        if (response.ok) {
            const data = await response.json();
            if (data.responseStatus === 200 && data.responseData) {
                targetText.textContent = data.responseData.translatedText;
            } else {
                // Fallback: simple dictionary-based translation
                targetText.textContent = fallbackTranslate(sourceText.value.trim(), sourceLang.value, targetLang.value);
            }
        } else {
            targetText.textContent = fallbackTranslate(sourceText.value.trim(), sourceLang.value, targetLang.value);
        }
    } catch (error) {
        console.error('Translation error:', error);
        targetText.textContent = fallbackTranslate(sourceText.value.trim(), sourceLang.value, targetLang.value);
    }
    
    translateBtn.disabled = false;
}

function fallbackTranslate(text, from, to) {
    // Simple fallback dictionary
    const dict = {
        'xin chào': { zh: '你好', en: 'Hello', ja: 'こんにちは' },
        'cảm ơn': { zh: '谢谢', en: 'Thank you', ja: 'ありがとう' },
        'tạm biệt': { zh: '再见', en: 'Goodbye', ja: 'さようなら' },
        'hello': { vi: 'Xin chào', zh: '你好', ja: 'こんにちは' },
        'thank you': { vi: 'Cảm ơn', zh: '谢谢', ja: 'ありがとう' },
        'goodbye': { vi: 'Tạm biệt', zh: '再见', ja: 'さようなら' },
        '你好': { vi: 'Xin chào', en: 'Hello', ja: 'こんにちは' },
        '谢谢': { vi: 'Cảm ơn', en: 'Thank you', ja: 'ありがとう' },
        'こんにちは': { vi: 'Xin chào', en: 'Hello', zh: '你好' },
    };
    
    const lower = text.toLowerCase();
    if (dict[lower] && dict[lower][to]) {
        return dict[lower][to];
    }
    
    return `[Dịch offline] ${text}`;
}

// ========== Copy to Clipboard ==========
function copyToClipboard(text) {
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Đã sao chép vào clipboard!');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Đã sao chép vào clipboard!');
    });
}

// ========== Toast ==========
function showToast(message) {
    const toast = $('#toast');
    const toastMessage = $('#toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
}

// ========== Parallax ==========
function initParallax() {
    const parallaxElements = $$('[data-speed]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach((el) => {
            const speed = parseFloat(el.dataset.speed);
            const offset = scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    });
}

// ========== Stats Animation ==========
function initStatsAnimation() {
    const counters = $$('.stats-counter');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, i * 150);
                }
            });
        },
        { threshold: 0.3 }
    );
    
    counters.forEach((counter) => observer.observe(counter));
}

// ========== Learning Path ==========
function initLearningPath() {
    const nodes = $$('.path-node');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const level = entry.target.dataset.level;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, (level - 1) * 200);
                }
            });
        },
        { threshold: 0.2 }
    );
    
    nodes.forEach((node) => observer.observe(node));
}

// ========== Mobile Menu ==========
function initMobileMenu() {
    const toggle = $('#mobileMenuToggle');
    const menu = $('#mobileMenu');
    const links = $$('.mobile-link');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });
        
        links.forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ========== Smooth Scroll for nav links ==========
$$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
