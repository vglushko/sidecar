using Microsoft.AspNetCore.Mvc;

[Route("ping")]
[ApiController]
public class HealthcheckController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> Get()
    {
        return "pong";
    }
}