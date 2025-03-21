import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";


const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Tiêu đề */}
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        GIỚI THIỆU VỀ CHÚNG TÔI
      </Typography>

      {/* Hình ảnh trụ sở chính */}
      <Card sx={{ mb: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={./images/companyImage.jpg} // Đường dẫn ảnh từ file đã tải lên
          alt="Trụ sở công ty"
        />
      </Card>

      {/* Nội dung */}
      <Typography variant="body1" paragraph>
        Công ty chúng tôi được thành lập vào năm 2008, chuyên sản xuất các linh kiện điện thoại di động. Chúng tôi có đội ngũ bán hàng chuyên nghiệp, dịch vụ hậu mãi tận tâm và có uy tín tốt trên thị trường.
      </Typography>
      <Typography variant="body1" paragraph>
        Chúng tôi luôn tập trung vào chất lượng và dịch vụ, tất cả sản phẩm đều được kiểm tra nghiêm ngặt và đóng gói an toàn để đảm bảo khách hàng nhận được hàng trong điều kiện hoàn hảo. Hiện nay, nhiều cửa hàng sửa chữa điện thoại và doanh nghiệp nước ngoài đã thiết lập mối quan hệ hợp tác lâu dài với chúng tôi nhờ vào sự tin tưởng và hỗ trợ từ đội ngũ của chúng tôi.
      </Typography>
      <Typography variant="body1" paragraph>
        Kể từ khi mở rộng thị trường quốc tế, dịch vụ chuyên nghiệp và giá cả cạnh tranh của chúng tôi đã giúp mở rộng kinh doanh sang Mỹ, Châu Âu, Nga, Dubai và các khu vực khác. Doanh thu hàng năm đạt khoảng 50 triệu USD. Chúng tôi luôn tìm kiếm cơ hội hợp tác mới. Nếu bạn quan tâm đến việc nhập khẩu hoặc phân phối sản phẩm của chúng tôi, hãy liên hệ với chúng tôi để biết thêm chi tiết.
      </Typography>

      {/* Biểu tượng & Thông tin thêm */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", py: 3 }}>
            <BusinessIcon sx={{ fontSize: 50, color: "primary.main" }} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Thành lập năm 2008
              </Typography>
              <Typography variant="body2">
                Hơn 15 năm kinh nghiệm trong ngành sản xuất linh kiện điện thoại.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", py: 3 }}>
            <FactoryIcon sx={{ fontSize: 50, color: "secondary.main" }} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Nhà máy hiện đại
              </Typography>
              <Typography variant="body2">
                Sử dụng công nghệ tiên tiến và quy trình sản xuất đạt chuẩn quốc tế.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", py: 3 }}>
            <PublicIcon sx={{ fontSize: 50, color: "success.main" }} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Xuất khẩu toàn cầu
              </Typography>
              <Typography variant="body2">
                Phục vụ khách hàng tại Mỹ, Châu Âu, Nga, Dubai và nhiều nước khác.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: "center", py: 3 }}>
            <SupportAgentIcon sx={{ fontSize: 50, color: "error.main" }} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Hỗ trợ 24/7
              </Typography>
              <Typography variant="body2">
                Đội ngũ hỗ trợ khách hàng chuyên nghiệp, luôn sẵn sàng phục vụ.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;