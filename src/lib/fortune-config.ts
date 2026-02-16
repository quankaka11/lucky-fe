// ============================================================
// Fortune (Quẻ) Schema & Mock Data
// ============================================================

export type FortuneCategory = "tai_loc" | "tinh_duyen" | "suc_khoe" | "cong_danh" | "gia_dao";

export type FortuneRating = 1 | 2 | 3 | 4 | 5; // 1 = xấu, 5 = cực tốt

export type FortuneMode = "random" | "tai_loc" | "tinh_duyen" | "suc_khoe" | "cong_danh" | "gia_dao";

export interface Fortune {
  id: string;
  category: FortuneCategory;
  title: string;           // Tên quẻ ngắn (VD: "Thuận Lợi Hanh Thông")
  rating: FortuneRating;
  summary: string;         // Tóm tắt 1 câu
  detail: string;          // Giải thích chi tiết
  advice: string;          // Lời khuyên
  luckyElement: string;    // Yếu tố may mắn (màu, số, hướng…)
  emoji: string;           // Emoji đại diện
}

export interface FortuneResult {
  fortune: Fortune;
  drawnAt: number; // timestamp
}

// ============================================================
// 50 Mock Fortunes
// ============================================================

export const MOCK_FORTUNES: Fortune[] = [
  // ── TÀI LỘC (10) ──
  { id: "tl-01", category: "tai_loc", title: "Tài Lộc Dồi Dào", rating: 5, summary: "Tiền bạc rủng rỉnh, đầu tư thuận lợi.", detail: "Vận tài chính cực vượng, mọi khoản đầu tư đều có lời. Quý nhân phương Đông giúp đỡ, cơ hội kinh doanh lớn đang đến.", advice: "Mạnh dạn đầu tư nhưng đừng quên tiết kiệm.", luckyElement: "Màu đỏ, số 8", emoji: "💰" },
  { id: "tl-02", category: "tai_loc", title: "Tiểu Tài Tiến Lộc", rating: 3, summary: "Thu nhập ổn định, không có biến động lớn.", detail: "Tài chính ở mức trung bình, không lỗ nhưng cũng chưa có đột phá. Cần kiên nhẫn tích lũy từng bước.", advice: "Tránh chi tiêu hoang phí, tập trung tiết kiệm.", luckyElement: "Màu vàng, số 3", emoji: "🪙" },
  { id: "tl-03", category: "tai_loc", title: "Phú Quý Lâm Môn", rating: 5, summary: "Vận may lớn về tài chính đang gõ cửa.", detail: "Cơ hội kiếm tiền bất ngờ xuất hiện. Có thể nhận được tin vui về thưởng, hợp đồng lớn hoặc quà tặng giá trị.", advice: "Đón nhận cơ hội nhưng cẩn trọng với lời mời hợp tác lạ.", luckyElement: "Hướng Nam, số 9", emoji: "🏆" },
  { id: "tl-04", category: "tai_loc", title: "Tài Vận Bình Hòa", rating: 3, summary: "Tài chính không tốt không xấu, cần cẩn thận.", detail: "Giai đoạn này nên giữ vững những gì đang có, không nên mạo hiểm. Tránh cho vay số lớn.", advice: "Giữ tiền trong túi, đợi thời cơ tốt hơn.", luckyElement: "Màu xanh lá, số 4", emoji: "⚖️" },
  { id: "tl-05", category: "tai_loc", title: "Hoạnh Tài Đắc Lợi", rating: 4, summary: "Tài lộc bất ngờ từ nguồn không ngờ tới.", detail: "Có thể nhận được tiền thưởng, trúng giải hoặc có khoản thu nhập phụ bất ngờ. Vận may đang mỉm cười.", advice: "Khi có tiền bất ngờ, hãy chia sẻ để nhân đôi phước.", luckyElement: "Số 7, hướng Tây", emoji: "🎰" },
  { id: "tl-06", category: "tai_loc", title: "Cẩn Tắc Vô Ưu", rating: 2, summary: "Cần đề phòng thất thoát tài chính.", detail: "Giai đoạn dễ mất tiền do sơ suất. Kiểm tra kỹ các giao dịch, tránh đầu tư liều lĩnh.", advice: "Siết chặt chi tiêu, không cho vay mượn lúc này.", luckyElement: "Màu đen, số 1", emoji: "🛡️" },
  { id: "tl-07", category: "tai_loc", title: "Nhất Bản Vạn Lợi", rating: 4, summary: "Đầu tư nhỏ mang lại lợi nhuận lớn.", detail: "Thời điểm thuận lợi để bắt đầu dự án nhỏ. Vốn ít nhưng nếu chọn đúng hướng sẽ sinh lời gấp nhiều lần.", advice: "Bắt đầu từ việc nhỏ, kiên trì sẽ thành công.", luckyElement: "Màu tím, số 6", emoji: "🌱" },
  { id: "tl-08", category: "tai_loc", title: "Lộc Bất Tận Hưởng", rating: 2, summary: "Tiền đến rồi đi, khó giữ được.", detail: "Dù có thu nhập nhưng chi tiêu cũng tăng theo. Cần lập kế hoạch tài chính rõ ràng hơn.", advice: "Lập ngân sách và tuân thủ nghiêm ngặt.", luckyElement: "Số 2, hướng Bắc", emoji: "💸" },
  { id: "tl-09", category: "tai_loc", title: "Kim Ngọc Mãn Đường", rating: 5, summary: "Giàu có phú quý, gia đình sung túc.", detail: "Vận tài lộc đỉnh cao. Mọi nỗ lực đều được đền đáp xứng đáng. Gia đình hưởng phúc lộc chung.", advice: "Biết ơn và chia sẻ để phước đức trường tồn.", luckyElement: "Màu đỏ vàng, số 88", emoji: "👑" },
  { id: "tl-10", category: "tai_loc", title: "Thủ Thành Vi Thắng", rating: 3, summary: "Giữ vững cơ nghiệp là chiến thắng.", detail: "Không phải lúc mở rộng, hãy bảo toàn vốn. Năm sau mới là thời điểm bứt phá.", advice: "Kiên nhẫn chờ đợi, không nóng vội.", luckyElement: "Hướng Đông, số 5", emoji: "🏯" },

  // ── TÌNH DUYÊN (10) ──
  { id: "td-01", category: "tinh_duyen", title: "Nhân Duyên Tương Ngộ", rating: 5, summary: "Gặp được người tâm đầu ý hợp.", detail: "Tình duyên đến bất ngờ, có thể gặp người đặc biệt tại sự kiện xã hội hoặc qua bạn bè giới thiệu.", advice: "Mở lòng đón nhận, đừng ngại bước ra ngoài.", luckyElement: "Màu hồng, hướng Nam", emoji: "💕" },
  { id: "td-02", category: "tinh_duyen", title: "Tình Nồng Ý Đẹp", rating: 4, summary: "Tình cảm thăng hoa, hạnh phúc tràn đầy.", detail: "Mối quan hệ hiện tại sẽ tiến triển tốt đẹp. Những hiểu lầm được hóa giải, tình cảm thêm sâu đậm.", advice: "Dành thời gian chất lượng cho người thương.", luckyElement: "Số 2, màu đỏ hồng", emoji: "❤️‍🔥" },
  { id: "td-03", category: "tinh_duyen", title: "Đào Hoa Vượng Khí", rating: 4, summary: "Sức hút cá nhân tăng cao, nhiều người để ý.", detail: "Giai đoạn này bạn tỏa sáng đặc biệt. Nhiều cơ hội giao lưu, kết bạn và phát triển tình cảm mới.", advice: "Chọn lọc kỹ, không nên sa đà.", luckyElement: "Hoa đào, hướng Tây", emoji: "🌸" },
  { id: "td-04", category: "tinh_duyen", title: "Bình Yên Hạnh Phúc", rating: 3, summary: "Tình cảm ổn định, bình lặng nhưng ấm áp.", detail: "Không có sóng gió lớn trong chuyện tình cảm. Đây là lúc để vun đắp và trân trọng những gì đang có.", advice: "Đừng tìm kiếm kịch tính, hạnh phúc nằm ở sự giản đơn.", luckyElement: "Màu trắng, số 6", emoji: "🕊️" },
  { id: "td-05", category: "tinh_duyen", title: "Tương Tư Chờ Đợi", rating: 2, summary: "Tình cảm đơn phương, cần kiên nhẫn.", detail: "Người bạn thương chưa nhận ra tấm lòng bạn. Đừng nản lòng, hãy thể hiện bằng hành động thiết thực.", advice: "Yêu thương bản thân trước, người đúng sẽ đến.", luckyElement: "Số 9, hoa hồng", emoji: "🥀" },
  { id: "td-06", category: "tinh_duyen", title: "Gương Vỡ Lại Lành", rating: 3, summary: "Cơ hội hàn gắn mối quan hệ cũ.", detail: "Nếu đã từng chia tay, đây có thể là thời điểm để nối lại. Nhưng hãy suy nghĩ kỹ trước khi quyết định.", advice: "Tha thứ nhưng đừng quên bài học.", luckyElement: "Hướng Bắc, màu xanh dương", emoji: "💎" },
  { id: "td-07", category: "tinh_duyen", title: "Hỷ Sự Lâm Môn", rating: 5, summary: "Tin vui về hôn nhân hoặc kết đôi.", detail: "Vận đào hoa cực vượng, khả năng cao có tin vui về đính hôn, cưới hỏi hoặc thêm thành viên mới.", advice: "Đón nhận niềm vui với lòng biết ơn.", luckyElement: "Màu đỏ, số 99", emoji: "💍" },
  { id: "td-08", category: "tinh_duyen", title: "Tri Kỷ Tri Âm", rating: 4, summary: "Gặp được người bạn đời tri kỷ.", detail: "Mối quan hệ này không chỉ là tình yêu mà còn là sự đồng điệu về tâm hồn. Rất quý giá và bền vững.", advice: "Trân trọng và gìn giữ mối duyên này.", luckyElement: "Số 11, hướng Đông Nam", emoji: "🌙" },
  { id: "td-09", category: "tinh_duyen", title: "Tình Duyên Trắc Trở", rating: 1, summary: "Chuyện tình cảm gặp nhiều thử thách.", detail: "Có thể xảy ra hiểu lầm, cãi vã hoặc xuất hiện người thứ ba. Cần bình tĩnh giải quyết.", advice: "Lắng nghe và thấu hiểu trước khi phán xét.", luckyElement: "Màu xanh lục, số 3", emoji: "⛈️" },
  { id: "td-10", category: "tinh_duyen", title: "Lương Duyên Thiên Định", rating: 5, summary: "Duyên trời định, không cưỡng được.", detail: "Mối duyên này như được sắp đặt. Hai người gặp nhau đúng lúc, đúng nơi, mọi thứ tự nhiên và hòa hợp.", advice: "Tin vào duyên phận, buông bỏ lo lắng.", luckyElement: "Số 8, hoa sen", emoji: "🪷" },

  // ── SỨC KHỎE (10) ──
  { id: "sk-01", category: "suc_khoe", title: "Thân Tâm An Lạc", rating: 5, summary: "Sức khỏe dồi dào, tinh thần sảng khoái.", detail: "Năng lượng tràn đầy, thể chất và tinh thần đều ở trạng thái tốt nhất. Rất thuận lợi để bắt đầu thói quen mới.", advice: "Duy trì lối sống lành mạnh để giữ phong độ.", luckyElement: "Màu xanh lá, trái cây tươi", emoji: "🌿" },
  { id: "sk-02", category: "suc_khoe", title: "Cần Chú Ý Nghỉ Ngơi", rating: 2, summary: "Dễ kiệt sức nếu không nghỉ ngơi đủ.", detail: "Cơ thể đang gửi tín hiệu cần được chăm sóc. Đừng ép bản thân quá mức, hãy lắng nghe cơ thể.", advice: "Ngủ đủ 7-8 tiếng, giảm stress.", luckyElement: "Màu xanh dương, thiên nhiên", emoji: "😴" },
  { id: "sk-03", category: "suc_khoe", title: "Phúc Thọ Song Toàn", rating: 5, summary: "Sống thọ khỏe mạnh, phúc đức đầy đủ.", detail: "Vận sức khỏe cực tốt, đặc biệt cho người lớn tuổi. Gia đình sum vầy, tinh thần phấn chấn.", advice: "Ăn uống điều độ, tập thể dục nhẹ nhàng mỗi ngày.", luckyElement: "Quả đào, số 9", emoji: "🍑" },
  { id: "sk-04", category: "suc_khoe", title: "Phòng Bệnh Hơn Chữa", rating: 3, summary: "Sức khỏe ổn nhưng cần phòng ngừa.", detail: "Không có vấn đề lớn nhưng nên đi khám định kỳ. Chú ý hệ tiêu hóa và đường hô hấp.", advice: "Uống nhiều nước, ăn rau xanh, tập thể dục.", luckyElement: "Nước chanh, hướng Đông", emoji: "🏥" },
  { id: "sk-05", category: "suc_khoe", title: "Tinh Lực Tràn Đầy", rating: 4, summary: "Năng lượng cao, làm gì cũng hăng hái.", detail: "Đây là giai đoạn đỉnh cao về thể lực. Rất phù hợp để thử thách bản thân với hoạt động mới.", advice: "Tận dụng năng lượng này để tập luyện và phát triển.", luckyElement: "Màu cam, thể thao", emoji: "⚡" },
  { id: "sk-06", category: "suc_khoe", title: "Tâm Bình An Tĩnh", rating: 4, summary: "Tâm hồn thanh thản, tinh thần vững vàng.", detail: "Sức khỏe tinh thần rất tốt. Bạn cảm thấy bình yên, sáng suốt và có khả năng đưa ra quyết định đúng đắn.", advice: "Thiền định hoặc yoga để duy trì trạng thái này.", luckyElement: "Hoa sen, hướng Tây Bắc", emoji: "🧘" },
  { id: "sk-07", category: "suc_khoe", title: "Cẩn Thận Ẩm Thực", rating: 2, summary: "Dạ dày nhạy cảm, cần kiêng khem.", detail: "Hệ tiêu hóa không ổn định, tránh đồ cay nóng và thức ăn ngoài đường. Nên ăn nhà nhiều hơn.", advice: "Ăn chậm nhai kỹ, tránh bia rượu.", luckyElement: "Trà xanh, rau xanh", emoji: "🍵" },
  { id: "sk-08", category: "suc_khoe", title: "Khí Huyết Lưu Thông", rating: 4, summary: "Tuần hoàn tốt, cơ thể hoạt động trơn tru.", detail: "Sức khỏe tổng quát rất tốt. Máu huyết lưu thông, da dẻ hồng hào, tinh thần minh mẫn.", advice: "Duy trì vận động đều đặn, massage thường xuyên.", luckyElement: "Màu đỏ, gừng tươi", emoji: "🫀" },
  { id: "sk-09", category: "suc_khoe", title: "Giấc Ngủ Ngon Lành", rating: 3, summary: "Cần cải thiện chất lượng giấc ngủ.", detail: "Giấc ngủ ảnh hưởng lớn đến sức khỏe tổng thể. Giai đoạn này nên ưu tiên nghỉ ngơi đầy đủ.", advice: "Tắt điện thoại trước 10 giờ tối, tạo không gian ngủ thoải mái.", luckyElement: "Lavender, ánh nến", emoji: "🌙" },
  { id: "sk-10", category: "suc_khoe", title: "Vượt Qua Thử Thách", rating: 2, summary: "Sức khỏe có biến động, cần theo dõi.", detail: "Có thể gặp vấn đề nhỏ về sức khỏe nhưng sẽ vượt qua nhanh chóng nếu chăm sóc đúng cách.", advice: "Đi khám bác sĩ nếu có triệu chứng bất thường.", luckyElement: "Số 5, vitamin C", emoji: "💪" },

  // ── CÔNG DANH (10) ──
  { id: "cd-01", category: "cong_danh", title: "Thăng Quan Tiến Chức", rating: 5, summary: "Sự nghiệp thăng tiến vượt bậc.", detail: "Cơ hội thăng chức, tăng lương hoặc nhận dự án lớn. Cấp trên đánh giá cao năng lực của bạn.", advice: "Tiếp tục phấn đấu, đừng tự mãn.", luckyElement: "Màu xanh navy, hướng Bắc", emoji: "🚀" },
  { id: "cd-02", category: "cong_danh", title: "Quý Nhân Phù Trợ", rating: 4, summary: "Có người giúp đỡ trong công việc.", detail: "Sẽ gặp được mentor hoặc đồng nghiệp tốt hỗ trợ bạn vượt qua khó khăn và phát triển sự nghiệp.", advice: "Biết ơn quý nhân, sẵn sàng giúp đỡ người khác.", luckyElement: "Số 6, hướng Đông", emoji: "🤝" },
  { id: "cd-03", category: "cong_danh", title: "Đổi Mới Sáng Tạo", rating: 4, summary: "Ý tưởng mới được đón nhận nồng nhiệt.", detail: "Đây là lúc để đề xuất ý tưởng sáng tạo. Sự đổi mới của bạn sẽ được ghi nhận và khen thưởng.", advice: "Tự tin trình bày, đừng sợ khác biệt.", luckyElement: "Màu tím, bút mực", emoji: "💡" },
  { id: "cd-04", category: "cong_danh", title: "Kiên Trì Sẽ Thắng", rating: 3, summary: "Công việc chậm nhưng chắc chắn.", detail: "Không có đột phá lớn nhưng nếu kiên trì, kết quả sẽ đến. Đây là giai đoạn tích lũy kinh nghiệm.", advice: "Không so sánh với người khác, đi đường dài.", luckyElement: "Tre trúc, số 4", emoji: "🎋" },
  { id: "cd-05", category: "cong_danh", title: "Cơ Hội Vàng", rating: 5, summary: "Cơ hội nghề nghiệp hiếm có xuất hiện.", detail: "Có thể nhận được lời mời làm việc tuyệt vời hoặc cơ hội hợp tác mang tính bước ngoặt.", advice: "Nắm bắt ngay, cơ hội không đợi ai.", luckyElement: "Màu vàng, hướng Tây Nam", emoji: "🌟" },
  { id: "cd-06", category: "cong_danh", title: "Học Hỏi Không Ngừng", rating: 3, summary: "Nên đầu tư vào kiến thức và kỹ năng.", detail: "Giai đoạn này phù hợp để học thêm, lấy chứng chỉ hoặc tham gia khóa đào tạo nâng cao.", advice: "Dành thời gian mỗi ngày để học điều mới.", luckyElement: "Sách, số 7", emoji: "📚" },
  { id: "cd-07", category: "cong_danh", title: "Vượt Khó Thành Công", rating: 3, summary: "Khó khăn là bệ phóng cho thành công.", detail: "Công việc gặp thử thách nhưng đó là cơ hội để chứng minh bản thân. Vượt qua sẽ được thưởng xứng đáng.", advice: "Bình tĩnh giải quyết, không bỏ cuộc.", luckyElement: "Núi, hướng Tây", emoji: "⛰️" },
  { id: "cd-08", category: "cong_danh", title: "Lãnh Đạo Tài Ba", rating: 4, summary: "Tố chất lãnh đạo tỏa sáng.", detail: "Bạn sẽ được giao trọng trách lớn hơn. Khả năng dẫn dắt đội nhóm được mọi người công nhận.", advice: "Lắng nghe đội ngũ, dẫn dắt bằng tấm gương.", luckyElement: "Sư tử, màu đỏ đậm", emoji: "👔" },
  { id: "cd-09", category: "cong_danh", title: "Chuyển Hướng Thuận Lợi", rating: 4, summary: "Đổi việc hoặc chuyển ngành sẽ suôn sẻ.", detail: "Nếu đang muốn thay đổi công việc, đây là thời điểm tốt. Vận may đang ủng hộ bước đi mới.", advice: "Chuẩn bị kỹ hồ sơ, tự tin phỏng vấn.", luckyElement: "Cầu vồng, số 1", emoji: "🌈" },
  { id: "cd-10", category: "cong_danh", title: "Tiểu Nhân Quấy Phá", rating: 1, summary: "Cẩn thận người ghen ghét trong công việc.", detail: "Có người đang nói xấu hoặc gây khó dễ cho bạn. Đừng để bị ảnh hưởng, tập trung vào năng lực.", advice: "Im lặng làm việc, kết quả sẽ nói thay lời.", luckyElement: "Bùa hộ mệnh, số 3", emoji: "🦊" },

  // ── GIA ĐẠO (10) ──
  { id: "gd-01", category: "gia_dao", title: "Gia Đình Hạnh Phúc", rating: 5, summary: "Gia đạo yên ấm, con cháu hiếu thuận.", detail: "Gia đình là bến đỗ bình yên. Mọi thành viên đều khỏe mạnh, hòa thuận và yêu thương nhau.", advice: "Dành thời gian cho gia đình mỗi ngày.", luckyElement: "Bàn ăn gia đình, hướng Đông", emoji: "🏠" },
  { id: "gd-02", category: "gia_dao", title: "Con Cháu Thành Tài", rating: 5, summary: "Con cái học giỏi, nên người.", detail: "Tin vui từ con cháu về học tập hoặc sự nghiệp. Cha mẹ tự hào vì thành tích của thế hệ sau.", advice: "Khích lệ nhưng không tạo áp lực quá lớn.", luckyElement: "Cây bút, số 10", emoji: "🎓" },
  { id: "gd-03", category: "gia_dao", title: "Hòa Khí Sinh Tài", rating: 4, summary: "Gia đình hòa thuận, mọi việc hanh thông.", detail: "Khi nhà cửa yên ấm, mọi việc bên ngoài cũng thuận lợi theo. Hòa khí là chìa khóa thành công.", advice: "Nhường nhịn nhau, không cố chấp việc nhỏ.", luckyElement: "Hoa mai, trà nóng", emoji: "🍵" },
  { id: "gd-04", category: "gia_dao", title: "Cần Thêm Gắn Kết", rating: 2, summary: "Gia đình cần thêm thời gian bên nhau.", detail: "Công việc bận rộn khiến bạn ít quan tâm gia đình. Đã đến lúc cân bằng lại.", advice: "Tổ chức bữa cơm gia đình, đi chơi cùng nhau.", luckyElement: "Album ảnh, hướng Tây Bắc", emoji: "📸" },
  { id: "gd-05", category: "gia_dao", title: "Phúc Mãn Đường", rating: 5, summary: "Nhà đầy phúc đức, tràn ngập may mắn.", detail: "Gia đình được phù hộ, mọi thành viên đều gặp may mắn. Nhà cửa thịnh vượng, con cháu đầy đàn.", advice: "Làm việc thiện để nhân đôi phước đức.", luckyElement: "Đèn lồng đỏ, số 88", emoji: "🏮" },
  { id: "gd-06", category: "gia_dao", title: "Mâu Thuẫn Nhỏ", rating: 2, summary: "Có xích mích trong gia đình, cần hóa giải.", detail: "Bất đồng quan điểm giữa các thế hệ hoặc vợ chồng. Cần ngồi lại nói chuyện thẳng thắn.", advice: "Lắng nghe trước, nói sau. Đặt mình vào vị trí người khác.", luckyElement: "Trà hoa cúc, hướng Nam", emoji: "🕊️" },
  { id: "gd-07", category: "gia_dao", title: "Thêm Thành Viên Mới", rating: 5, summary: "Tin vui về thành viên mới trong gia đình.", detail: "Có thể sắp đón thêm em bé, con dâu, con rể hoặc thú cưng mới. Niềm vui nhân đôi.", advice: "Chuẩn bị đón thành viên mới với tình yêu thương.", luckyElement: "Nôi em bé, màu hồng", emoji: "👶" },
  { id: "gd-08", category: "gia_dao", title: "Tổ Ấm Vững Chãi", rating: 4, summary: "Nền tảng gia đình vững chắc.", detail: "Gia đình có tài chính ổn định, tình cảm bền chặt. Đây là nền tảng vững chắc cho mọi thành công.", advice: "Tiếp tục vun đắp, không lơ là.", luckyElement: "Cây đa, hướng Đông Bắc", emoji: "🌳" },
  { id: "gd-09", category: "gia_dao", title: "Hiếu Đạo Tròn Đầy", rating: 4, summary: "Cha mẹ khỏe mạnh, con cái hiếu thảo.", detail: "Mối quan hệ giữa các thế hệ trong gia đình rất tốt đẹp. Cha mẹ hài lòng, con cái biết ơn.", advice: "Gọi điện hỏi thăm cha mẹ thường xuyên.", luckyElement: "Trái tim, số 6", emoji: "💝" },
  { id: "gd-10", category: "gia_dao", title: "Nhà Mới Lộc Mới", rating: 4, summary: "Chuyển nhà hoặc sửa sang sẽ thuận lợi.", detail: "Nếu có kế hoạch chuyển nhà, xây sửa hoặc trang trí lại, đây là thời điểm rất thuận lợi.", advice: "Chọn ngày tốt, làm lễ tân gia.", luckyElement: "Chìa khóa vàng, hướng Tây Nam", emoji: "🔑" },
];

// ============================================================
// Mode config
// ============================================================

export const FORTUNE_MODES: Record<FortuneMode, { label: string; emoji: string; description: string }> = {
  random: { label: "Ngẫu Nhiên", emoji: "🎲", description: "Để vận mệnh quyết định" },
  tai_loc: { label: "Tài Lộc", emoji: "💰", description: "Xem vận tiền tài" },
  tinh_duyen: { label: "Tình Duyên", emoji: "💕", description: "Xem vận tình cảm" },
  suc_khoe: { label: "Sức Khỏe", emoji: "🌿", description: "Xem vận sức khỏe" },
  cong_danh: { label: "Công Danh", emoji: "🚀", description: "Xem vận sự nghiệp" },
  gia_dao: { label: "Gia Đạo", emoji: "🏠", description: "Xem vận gia đình" },
};

// ============================================================
// Fortune selection logic
// ============================================================

export function randomFortune(mode: FortuneMode = "random"): Fortune {
  const pool =
    mode === "random"
      ? MOCK_FORTUNES
      : MOCK_FORTUNES.filter((f) => f.category === mode);

  return pool[Math.floor(Math.random() * pool.length)];
}

// ============================================================
// Abstraction – calls ai-core API, fallback to mock
// ============================================================

export async function getFortune(
  mode: FortuneMode = "random",
  userName?: string
): Promise<FortuneResult> {
  const enableAI = import.meta.env.VITE_ENABLE_AI === "true";
  const apiUrl = import.meta.env.VITE_AI_API_URL || "http://localhost:8000/api";
  const timeout = Number(import.meta.env.VITE_AI_TIMEOUT) || 8000;

  if (!enableAI) {
    return { fortune: randomFortune(mode), drawnAt: Date.now() };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    const res = await fetch(`${apiUrl}/fortune`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, user_name: userName ?? null }),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();

    // Map snake_case API response → camelCase FE interface
    const fortune: Fortune = {
      id: `ai-${Date.now()}`,
      category: data.mode as FortuneCategory,
      title: data.fortune.title,
      rating: data.fortune.rating as FortuneRating,
      summary: data.fortune.summary,
      detail: data.fortune.detail,
      advice: data.fortune.advice,
      luckyElement: data.fortune.lucky_element,
      emoji: data.fortune.emoji,
    };

    return { fortune, drawnAt: data.drawn_at };
  } catch (err) {
    console.warn("[getFortune] AI call failed, falling back to mock:", err);
    return { fortune: randomFortune(mode), drawnAt: Date.now() };
  }
}

// ============================================================
// Rating helpers
// ============================================================

export function ratingStars(rating: FortuneRating): string {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export function ratingLabel(rating: FortuneRating): string {
  const labels: Record<FortuneRating, string> = {
    1: "Xấu",
    2: "Trung bình",
    3: "Khá",
    4: "Tốt",
    5: "Cực tốt",
  };
  return labels[rating];
}

export function ratingColor(rating: FortuneRating): string {
  if (rating >= 4) return "text-accent";
  if (rating >= 3) return "text-foreground";
  return "text-muted-foreground";
}
